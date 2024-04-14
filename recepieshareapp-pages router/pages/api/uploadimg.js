import { imguploader } from "@/helpers/imguploader";
import { IncomingForm } from "formidable";
var slugify = require("slugify");
export const config = {
  api: {
    bodyParser: false, // Disable bodyParser
  },
};
export default async function handler(req, res) {
  if (req.method != "POST") return res.status(500).json({ status: "fail" });
  try {
    const form = new IncomingForm({ allowEmptyFiles: true, minFileSize: 0 });
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      const { file, title } = fields;

      if (!title?.[0]) {
        return res.status(400).json({ error: "Enter valid title" });
      }
      if (files?.file[0].size * 1 == 0) {
        return res.status(400).json({ error: "upload image" });
      }
      const slug = slugify(title[0]);
      await imguploader(files.file[0], slug);

      res.status(200).json({ message: "File uploaded successfully" });
    });
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
