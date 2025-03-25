import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const DATABASE_URL = process.env.DATABASE_URL;

export async function GET() {
  let sql = neon(DATABASE_URL);
  let result = await sql(`SELECT * FROM posts`);
  return Response.json(result);
}