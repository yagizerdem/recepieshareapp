const fs = require("fs");
export default async function handler(req, res) {
  if (req.method === "GET") {
    const PATH = process.cwd().concat("/public");
    try {
      const images = await fs.promises.readdir(PATH);
      return res.status(200).json({ images });
    } catch (error) {
      console.error("Error reading directory:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  return res.status(200).json({ images: null });
}
