import { FreshContext } from "$fresh/server.ts";

export const handler = async (req: Request, _ctx: FreshContext): Promise<Response> => {
  const bodyText = await req.text();
  const params = new URLSearchParams(bodyText);
  const name = params.get('name') ?? '';
  console.log("Saving name:", name);

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `name=${name}; HttpOnly; Path=/; SameSite=Lax`
  );
  headers.append("Location", "/");

  return new Response(null, { status: 303, headers });
};