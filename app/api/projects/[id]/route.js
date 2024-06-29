export async function GET(request, { params }) {
  let projectId = params.id;
  const res = await fetch(
    `https://api.mahfuzur.me/wp-json/wp/v2/projects/${projectId}?_fields=id,title,content,yoast_head_json.og_image`,
    {
      headers: {
        Authorization: `Bearer ${process.env.WP_API_KEY}`,
      },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
