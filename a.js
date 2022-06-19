const fs = require("fs");

const files = fs.readdirSync("./emotes");

const audio = [];

files.forEach((file, index) => {
  if (index < 50) {
    const data = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      title: file.split(".")[0],
      url: "https://royale-king-host.vercel.app/" + file,
    };
    audio.push(data);
  }
});

fs.writeFile(
  "emotes.json",
  JSON.stringify({ audioFiles: audio }, null, 2),
  (err) => {
    if (err) throw err;
    console.log("file saved");
  }
);
