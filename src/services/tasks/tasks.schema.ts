import { z } from 'zod'

export type ITask = {
	title: string
	id: number
	completed: boolean
}

export const CreateTaskSchema = z.object({
	title: z.string().min(1).max(256),
})
export type ICreateTask = z.infer<typeof CreateTaskSchema>
