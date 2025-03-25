import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const DATABASE_URL = process.env.DATABASE_URL;

export async function GET() {
  const sql = neon(DATABASE_URL);
  const r1 = await sql(
    `INSERT INTO accesses (access_time, notes) VALUES(NOW(), 'inserted by API route')`
  );
  const r2 = await sql(`SELECT COUNT(*) FROM accesses`);
  return Response.json({ greeting: "Hello from the add api", r1, r2 });
}
