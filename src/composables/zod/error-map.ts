import { z, type ZodIssueOptionalMessage } from 'zod'

export const validateErrors = {
	required: () => 'Поле обязательно для заполнения',
	pdAgree: () => 'Необходимо согласиться с правилами обработки персональных данных',
	email: () => 'Это должен быть валидный e-mail',
	phone: () => 'Это должен быть валидный номер телефона',
	maxString: (maxStringLength: number) => `Не более ${maxStringLength} символов`,
	minString: (minStringLength: number) => `Не менее ${minStringLength} символов`,
	maxNumber: (maxValue: number) => `Не более ${maxValue}`,
	minNumber: (minValue: number) => `Не менее ${minValue}`,
} as const

const zodErrorMap = {
	custom: (issue: ZodIssueOptionalMessage) => 'custom',
	invalid_arguments: (issue: ZodIssueOptionalMessage) => 'invalid_arguments',
	invalid_date: (issue: ZodIssueOptionalMessage) => 'invalid_date',
	invalid_enum_value: (issue: ZodIssueOptionalMessage) => 'invalid_enum_value',
	invalid_intersection_types: (issue: ZodIssueOptionalMessage) => 'invalid_intersection_types',
	invalid_literal: (issue: ZodIssueOptionalMessage) => 'invalid_literal',
	invalid_return_type: (issue: ZodIssueOptionalMessage) => 'invalid_return_type',
	invalid_string: (issue: ZodIssueOptionalMessage) => 'invalid_string',
	invalid_type: (issue: ZodIssueOptionalMessage) => validateErrors.required(),
	phone: (issue: ZodIssueOptionalMessage) => validateErrors.phone(),
	email: (issue: ZodIssueOptionalMessage) => validateErrors.email(),
	invalid_union: (issue: ZodIssueOptionalMessage) => 'invalid_union',
	invalid_union_discriminator: (issue: ZodIssueOptionalMessage) => 'invalid_union_discriminator',
	not_finite: (issue: ZodIssueOptionalMessage) => 'not_finite',
	not_multiple_of: (issue: ZodIssueOptionalMessage) => 'not_multiple_of',
	too_big: (issue: ZodIssueOptionalMessage) => {
		return issue.type === 'number'
			? validateErrors.maxNumber(issue.maximum)
			: validateErrors.maxString(issue.maximum)
	},
	too_small: (issue: ZodIssueOptionalMessage) => {
		if (issue.minimum === 1) return validateErrors.required()

		return issue.type === 'number'
			? validateErrors.minNumber(issue.minimum)
			: validateErrors.minString(issue.minimum)
	},
	unrecognized_keys: (issue: ZodIssueOptionalMessage) => 'unrecognized_keys',
}

export const useZodErrorMap = () => {
	const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
		if (!zodErrorMap[issue.code]) return { message: ctx.defaultError }
		return { message: zodErrorMap[issue.code](issue) }
	}
	z.setErrorMap(customErrorMap)
}
