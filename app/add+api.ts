"use server";
import { neon } from "@neondatabase/serverless";

let DATABASE_URL =
  "postgresql://format_owner:P4QEedifkyV3@ep-curly-credit-a6uf9pul.us-west-2.aws.neon.tech/format?sslmode=require";

export async function GET(request: Request) {
  let sql = neon(DATABASE_URL);

  console.log("Log from the add+api endpoint");
  let r1 = await sql(`INSERT INTO accesses (access_time, notes) VALUES(, 'inserted by API route')`);
  let r2 = await sql(`SELECT COUNT(*) FROM accesses`);
  return Response.json({ greeting: "Hello from the add api", r2 });
}

// app/actions.ts