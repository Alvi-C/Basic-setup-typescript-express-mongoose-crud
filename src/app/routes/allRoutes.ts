import express from 'express'
import userRouter from '../modules/user/user.route'

const router = express.Router()

router.use('/api/v1/user', userRouter)

export default router
