import { PrismaClient } from "@prisma/client";
import express from 'express'
import { configDotenv } from "dotenv";

const role = new PrismaClient();
const app = express()

const config = () => configDotenv();

export {role, app, config}


