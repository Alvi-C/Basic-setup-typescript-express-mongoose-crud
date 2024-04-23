import express from 'express'
import {
	createUser,
	getAdminUsers,
	getAllUsers,
	getSingleUser,
} from './user.controller'

const userRouter = express.Router()

userRouter.route('/').get(getAllUsers)
userRouter.route('/all-admins').get(getAdminUsers)
userRouter.route('/:id').get(getSingleUser)
userRouter.route('/create-user').post(createUser)

export default userRouter
