import { z } from 'zod'

export const TaskSchema = z.object({
	id: z.number().positive(),
	title: z.string().min(1).max(256),
	completed: z.boolean(),
})
export type ITask = z.infer<typeof TaskSchema>

export const CreateTaskSchema = z.object({
	title: z.string().min(1).max(256),
	completed: z.boolean(),
})
export type ICreateTask = z.infer<typeof CreateTaskSchema>
