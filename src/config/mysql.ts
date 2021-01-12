import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from '../models/User'
createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'up',
  entities: [
    User
  ],
  synchronize: true
}).then(connection => {
  console.log('conectou', connection)
  // here you can start to work with your entities
}).catch(error => console.log(error))
