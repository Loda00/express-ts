import { createPool } from 'mysql2/promise'
import { _config } from './config/config'

export async function connect() {
  const connect = await createPool(_config.connection)
  return connect
}

/* 
  npm i typescript -D
  npx tsc --init
  config outDir

  sudo mysql -u root -p [password]
*/