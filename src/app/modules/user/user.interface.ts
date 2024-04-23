import { Model } from 'mongoose'

// create user interface
export interface IUser {
	id: string
	role: 'student'
	password: string
	name: {
		firstName: string
		middleName?: string
		lastName: string
	}
	dateOfBirth?: string
	gender: 'male' | 'female'
	email?: string
	contactNo: string
	emergencyContactNo: string
	presentAddress: string
	permanentAddress: string
}

// static method
// need to extend Model
export interface UserModel extends Model<IUser> {
	getAdminUsers(): IUser[]
}

// instance method
export interface IUserMethods {
	fullName(): string
}
