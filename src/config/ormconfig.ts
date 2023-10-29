import {DataSource} from 'typeorm'
import dotenv from "dotenv";

dotenv.config();

export const connectionDB = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(process.env.SERVER_PORT),
  username: process.env.SERVER_NAME,
  password: process.env.SERVER_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  subscribers: [],
  migrations: ["migrations/**/*.ts"],
})

connectionDB
  .initialize()
  .then(() => {
    console.log('connection with db is oK')
  })
   .catch((error) => {
    console.log('error', error)
   })