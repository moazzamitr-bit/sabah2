import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Sabah corporate homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="fa" dir="rtl">/i);
  assert.match(html, /<title>گروه صنعتی صباح/);
  assert.match(html, /قدرت یک زنجیره کامل/);
  assert.match(html, /درباره هلدینگ صباح/);
  assert.match(html, /زنجیره ارزش یکپارچه صباح/);
  assert.match(html, /توانمندی‌های گروه صنعتی صباح/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("uses the industrial green and gold visual system", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /--navy-950:\s*#052a24/);
  assert.match(css, /--navy-900:\s*#073b31/);
  assert.match(css, /--navy-800:\s*#0d5747/);
  assert.match(css, /--gold:\s*#c99b47/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
