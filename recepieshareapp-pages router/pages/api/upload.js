import { newRecord } from "@/helpers/db-util";
import { imguploader } from "@/helpers/imguploader";
import { IncomingForm } from "formidable";
var slugify = require("slugify");

export default async function handler(req, res) {
  if (req.method != "POST") return res.status(500).json({ status: "fail" });
  const data = req.body;
  try {
    for (var key of Object.keys(data)) {
      if (!data[key]) {
        return res.status(400).json({ status: "fail" });
      }
    }
    data.slug = slugify(data.title);
    data.image = data.slug + "." + data.image;
    newRecord(data);
  } catch (error) {
    return res.status(500).json({ status: "error" });
  }

  return res.status(200).json({ status: "success" });
}
