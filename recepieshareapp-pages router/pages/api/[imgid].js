import { getAllRecepie } from "@/helpers/db-util";
export default async function handler(req, res) {
  const imgid = req.query.imgid;
  if (req.method === "GET") {
    try {
      const recepies = getAllRecepie();
      const img = recepies.find((item) => item.id == imgid).image;
      return res.status(200).json({ img });
    } catch (error) {
      console.error("Error reading directory:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  return res.status(200).json({ img: null });
}
