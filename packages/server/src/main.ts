import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { ExpressAdapter } from '@nestjs/platform-express'
import { AppModule } from '~/modules/app/app.module'

const requestHandler = async () => {
  // No need to add express server instance to ExpressAdapter.
  const adapter = new ExpressAdapter()
  const logger = new Logger('RequestHandler')

  logger.log('Starting request handler...')

  try {
    // Extract necessary functions from NestJS application.
    const { enableCors, init } = await NestFactory.create(AppModule, adapter)

    enableCors()
    await init()
    logger.log('Request handler successfully started')
  }
  catch (error) {
    logger.error(error, 'Error while staring request handler')
  }
}

requestHandler()
