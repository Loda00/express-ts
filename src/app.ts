import express, { Application } from 'express'
import morgan from 'morgan'

import Index from './routes/index.routes'
import PostRoutes from './routes/post.routes'

import { time } from './middleware/time'

export class App {

  private app: Application

  constructor(private port: Number | String) {
    this.app = express()
    this.settings()
    this.middleware()
    this.routes()
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000)
  }

  middleware() {
    this.app.use(morgan('dev'))
    this.app.use(time)
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(Index)
    this.app.use('/post', PostRoutes)
  }

  async listen() {
    await this.app.listen(this.app.get('port'))
    console.log(`server listening port ${this.app.get('port')}`)
  }

}