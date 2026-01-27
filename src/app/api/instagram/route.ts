import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ensures server runtime

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const igUserId = process.env.INSTAGRAM_IG_USER_ID;

  if (!accessToken || !igUserId) {
    return NextResponse.json(
      { error: "Missing INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_IG_USER_ID" },
      { status: 500 }
    );
  }

  const url =
    `https://graph.facebook.com/v19.0/${igUserId}/media` +
    `?fields=id,media_type,media_url,thumbnail_url,caption,permalink,timestamp` +
    `&access_token=${encodeURIComponent(accessToken)}`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: "Instagram API error", details: data },
      { status: res.status }
    );
  }

  return NextResponse.json(data);
}
