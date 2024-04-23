import { Model, Schema, model } from 'mongoose'
import { IUser, IUserMethods } from './user.interface'

// type UserModel = Model<IUser, {}, IUserMethods> // this is only for instance method

// though it is static method, we need to extend Model
// to extend Model, we need to use interface only not type
export interface UserModel extends Model<IUser, {}, IUserMethods> {
	getAdminUsers(): Promise<IUser[]>
}

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
	id: { type: String, required: true, unique: true },
	role: { type: String, required: true },
	password: { type: String, required: true },
	name: {
		firstName: { type: String, required: true },
		middleName: { type: String },
		lastName: { type: String, required: true },
	},
	dateOfBirth: { type: String },
	gender: { type: String, enum: ['male', 'female'] },
	email: { type: String },
	contactNo: { type: String, required: true },
	emergencyContactNo: { type: String, required: true },
	presentAddress: { type: String, required: true },
	permanentAddress: { type: String, required: true },
})

// static method
userSchema.static('getAdminUsers', async function getAdminUsers() {
	const admins = await this.find({ role: 'admin' }) // it is a database query
	return admins
})

// instance method
userSchema.method('fullName', function fullName() {
	return this.name.firstName + ' ' + this.name.lastName
})

const User = model<IUser, UserModel>('User', userSchema)

export default User
