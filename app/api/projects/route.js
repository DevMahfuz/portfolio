export async function GET() {
  const res = await fetch(
    "https://api.mahfuzur.me/wp-json/wp/v2/projects?_fields=id,title,excerpt,yoast_head_json.og_image",
    {
      headers: {
        Authorization: `Bearer ${process.env.WP_API_KEY}`,
      },
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
