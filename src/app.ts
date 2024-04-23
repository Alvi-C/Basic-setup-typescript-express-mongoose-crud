import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes/allRoutes'

const app: Application = express()

// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

export default app
