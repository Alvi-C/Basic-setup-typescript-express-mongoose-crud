import { Request, Response } from 'express'
import {
	createUserToDB,
	getAdminUsersFromDB,
	getAllUsersFromDB,
	getUserByIdFromDB,
} from './user.service'

export const getAllUsers = async (req: Request, res: Response) => {
	const user = await getAllUsersFromDB()

	res.status(200).json({
		status: 'success',
		data: user,
	})
}

export const getSingleUser = async (req: Request, res: Response) => {
	const id = req.params.id
	const user = await getUserByIdFromDB(id)

	res.status(200).json({
		status: 'success',
		data: user,
	})
}

export const getAdminUsers = async (req: Request, res: Response) => {
	const user = await getAdminUsersFromDB()

	res.status(200).json({
		status: 'success',
		data: user,
	})
}

export const createUser = async (req: Request, res: Response) => {
	const data = req.body
	const user = await createUserToDB(data)

	res.status(200).json({
		status: 'success',
		data: user,
	})
}
