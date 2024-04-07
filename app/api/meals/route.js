export const dynamic = "force-dynamic"; // defaults to auto
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const imgurl = url.searchParams.get("image");
  if (!imgurl) return Response.json({ data: null });
  const extension = imgurl.split(".").pop();

  const publicDir = path.join(__dirname.split(".next")[0], "public", imgurl);
  const data = fs.readFileSync(publicDir);
  return Response.json({ data: JSON.stringify(data) });
}

// if (req.query.slug && req.query.slug.length) {
//   const publicDir = __dirname.split(".next")[0] + "public/";
//   const fileUrl = req.query.image.join("/");
//   fs.readFile(publicDir + fileUrl, (error, data) => {
//     if (error) {
//       return res.status(404).send(null);
//     }
//     return res.status(200).send(data);
//   });
// } else {
//   res.status(404).send(null);
// }
