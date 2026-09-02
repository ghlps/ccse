import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const pageId = url.searchParams.get("pageId") || "global";

  const db = locals.cloudflare.env.DB;

  const result = await db
    .prepare("SELECT likes FROM page_likes WHERE page_id = ?")
    .bind(pageId)
    .first<{ likes: number }>();

  const count = result ? result.likes : 0;

  return new Response(JSON.stringify({ likes: count }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const { pageId = "global" } = await request.json();

  const db = locals.cloudflare.env.DB;
  const kv = locals.cloudflare.env.LIKES_RATE_LIMIT;

  const clientIP = request.headers.get("cf-connecting-ip") || "unknown-ip";
  const rateLimitKey = `rate-limit:${pageId}:${clientIP}`;

  const existingVote = await kv.get(rateLimitKey);
  if (existingVote) {
    return new Response(
      JSON.stringify({
        error: "Rate limit exceeded. Please wait before liking again.",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  await db
    .prepare(
      `INSERT INTO page_likes (page_id, likes) VALUES (?, 1) ON CONFLICT(page_id) DO UPDATE SET likes = likes + 1`,
    )
    .bind(pageId)
    .run();

  await kv.put(rateLimitKey, "1", { expirationTtl: 60 });

  const updated = await db
    .prepare("SELECT likes FROM page_likes WHERE page_id = ?")
    .bind(pageId)
    .first<{ likes: number }>();

  return new Response(JSON.stringify({ likes: updated ? updated.likes : 1 }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const prerender = false;
