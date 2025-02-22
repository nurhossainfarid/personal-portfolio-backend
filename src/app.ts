import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import NotFound from './app/middlewares/notFound'

const app: Application = express()

// parser
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

// Application routes
app.use('/portfolio/api', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to bi-cycle store backend!')
})

app.use(globalErrorHandler)
app.use(NotFound)

export default app
