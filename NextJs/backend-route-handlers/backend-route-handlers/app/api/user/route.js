import { headers, cookies } from "next/headers";

const headerList = await headers();
const userAgent = headerList.get("user-agent") || "Unknown";
const username = request.cookies.get("username")?.value || "Unknown";
const cokieStore = await cookies();
cookieStore.set("theme", "dark");

export async function GET(request) {
  const reqHeaders = new Headers(request.headers);
  console.log(reqHeaders.get("Authorization"));
  return new Response("<h1>Hello World</h1>", {
    headers: {
      "Content-Type": "text/html",
      "set-cookie": "username=robiul",
    },
  });
}

