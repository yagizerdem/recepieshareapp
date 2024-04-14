const path = require("path");
const fs = require("fs");
async function imguploader(file, slug) {
  const fileContent = await fs.promises.readFile(file.filepath);
  await fs.promises.writeFile(
    path.join(process.cwd(), "public") +
      `\\${slug}.${file.originalFilename.split(".").pop()}`,
    fileContent
  );
}
module.exports = { imguploader };
