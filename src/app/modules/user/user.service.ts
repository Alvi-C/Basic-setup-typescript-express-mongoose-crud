import { IUser } from './user.interface'
import User from './user.model'

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	// create a new user document using the model
	const user = new User(payload)
	await user.save()
	// console.log(user)
	return user
}

export const getAllUsersFromDB = async (): Promise<IUser[]> => {
	const user = await User.find()
	return user
}

export const getUserByIdFromDB = async (
	payload: string
): Promise<IUser | null> => {
	const user = await User.findOne({ id: payload })
	return user
}

export const getAdminUsersFromDB = async (): Promise<IUser[]> => {
	const admins = User.getAdminUsers()
	return admins
}
