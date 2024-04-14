import { getAllRecepie } from "@/helpers/db-util";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const recepies = getAllRecepie();
    return res.status(200).json({ recepies });
  } else if (req.method === "POST") {
  }
  return res.status(200).json({ images: null });
}
