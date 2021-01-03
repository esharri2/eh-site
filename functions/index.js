const fs = require("fs");

module.exports = () => {
  const allFiles = fs.readdirSync("./functions");
  const files = allFiles.filter(
    (file) => file !== "index.js" && file.includes(".js")
  );
  return files;
};
