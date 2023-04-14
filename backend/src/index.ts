import app from './app'
import { PORT as port } from '../config'
import { logger } from './utils'

app.listen(port, () => logger.info(`server running on http:localhost:${port}`))
