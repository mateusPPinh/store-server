import "reflect-metadata"
import dotenv from 'dotenv';
import express from "express";
import { connectionDB } from "./config/ormconfig";

import routes from "./routes";

connectionDB

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.APP_PORT;

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});