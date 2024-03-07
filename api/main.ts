// @deno-types="npm:hono"
import { Hono } from "https://deno.land/x/hono@v4.0.10/mod.ts";
import { cors } from "https://deno.land/x/hono@v4.0.10/middleware/cors/index.ts";

const app = new Hono();

app.use("/*", cors());
app.all("/*", async (c) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1${c.req.path.slice(1)}`,
    {
      method: c.req.method,
      body: await c.req.json(),
      headers: c.req.raw.headers,
    },
  );

  console.log(res);

  const jData = await res.json();

  console.log(jData);

  return c.json(jData, { status: res.status });
});

Deno.serve({
  port: 3000,
}, app.fetch);
