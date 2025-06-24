import { toTypedSchema } from '@vee-validate/zod'
import { merge } from 'lodash'
import { type FormContext, type FormState, useForm } from 'vee-validate'
import { computed, reactive, ref, toRaw, watch } from 'vue'
import z, { type ZodSchema } from 'zod'

type IValues = Record<string, undefined | IValues>
const createValues = <T>(form: FormContext, values: IValues, key?: string) => {
	return Object.keys(values).reduce(
		(values, subKey) => {
			if (typeof values[subKey] === 'object') {
				values[subKey] = createValues(form, values[subKey], subKey)
				return values
			}

			values[subKey] = form.defineField(key ? key + '.' + subKey : subKey)[0]
			return values
		},
		reactive({}) as T
	) as T
}

const withoutRefine = (schema: ZodSchema): ZodSchema => {
	return schema._def.shape ? schema : withoutRefine(schema._def.schema)
}

export const useValidate = (schema: ZodSchema, _initialValues = {}) => {
	// создание form && values
	const { values: v } = useForm({
		validationSchema: toTypedSchema(withoutRefine(schema)),
	})
	const form = useForm({
		validationSchema: toTypedSchema(schema),
		initialValues: merge(toRaw(v), _initialValues),
	})
	const values = createValues(form, v) as z.infer<typeof schema>

	// изменение meta.dirty
	const initialValues = ref<unknown>(JSON.stringify(values))
	const dirty = computed(() => initialValues.value !== JSON.stringify(values))
	const meta = computed(() => ({
		...form.meta.value,
		dirty: dirty.value,
	}))
	const resetForm = (v?: Partial<FormState<unknown>>) => {
		form.resetForm(v)
		initialValues.value = JSON.stringify(v || values)
	}

	const resetInitialValues = (v?: Partial<FormState<unknown>>) => {
		initialValues.value = JSON.stringify(v || values)
	}

	watch(values, form.validateSchema, { deep: true })

	return {
		...form,
		values,
		resetForm,
		resetInitialValues,
		meta,
	}
}
