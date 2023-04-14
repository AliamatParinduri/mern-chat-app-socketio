import mongoose from 'mongoose'

import app from './app'
import { DBUri, PORT as port } from '../config'
import { logger } from './utils'

console.log(DBUri)

mongoose
  .connect(DBUri)
  .then(() => {
    logger.info('Success - connect to database mongoose')
    app.listen(port, () => logger.info(`server running on http://localhost:${port}`))
  })
  .catch((err) => {
    logger.error('Error - connect to database mongoose ', err)
  })
