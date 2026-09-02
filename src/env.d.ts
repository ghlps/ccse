/// <reference types="astro/client" />

type D1Database = import("@cloudflare/workers-types").D1Database;
type KVNamespace = import("@cloudflare/workers-types").KVNamespace;

interface Env {
  DB: D1Database;
  LIKES_RATE_LIMIT: KVNamespace;
}

declare namespace App {
  interface Locals {
    cloudflare: {
      env: Env;
      cf: import("@cloudflare/workers-types").IncomingRequestCfProperties;
      ctx: {
        waitUntil(promise: Promise<unknown>): void;
        passThroughOnException(): void;
      };
    };
  }
}
