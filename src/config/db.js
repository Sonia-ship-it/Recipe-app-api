import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless"
import ENV from "./env.js";
import * as schema from "../db/schema.js"

const pool=new Pool({
    connectionString: ENV.DATABASE_URL,
})
export const db = drizzle(pool, {schema})
