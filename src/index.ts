import { App } from './app'
import { _config } from './config/config'
const main = () => {
  const app = new App(_config.port)
  app.listen()
}

main()