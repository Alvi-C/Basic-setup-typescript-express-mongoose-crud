import mongoose from 'mongoose'
import app from './app'

const port: number = 8000

// database connection
async function main() {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/test')
		console.log('connected to database')

		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`)
		})
	} catch (err) {
		console.log(`failed to connect`, err)
	}
}

main()
