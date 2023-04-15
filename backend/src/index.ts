import app from './app'
import { PORT as port } from '../config'
import { connectDB, logger } from './utils'

connectDB()

app.listen(port, () => logger.info(`server running on http://localhost:${port}`))
