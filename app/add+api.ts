import { neon } from "@neondatabase/serverless";

const DATABASE_URL =
  "postgresql://format_owner:P4QEedifkyV3@ep-curly-credit-a6uf9pul.us-west-2.aws.neon.tech/format?sslmode=require";

export async function GET() {
  const sql = neon(DATABASE_URL);
  const r1 = await sql(
    `INSERT INTO accesses (access_time, notes) VALUES(NOW(), 'inserted by API route')`
  );
  const r2 = await sql(`SELECT COUNT(*) FROM accesses`);
  return Response.json({ greeting: "Hello from the add api", r1, r2 });
}
