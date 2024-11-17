export const handler = async (req: Request, _ctx: FreshContext): Promise<Response> => {
  return new Response("Hello, world!");
}