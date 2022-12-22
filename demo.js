const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

var datetimes = new Date().getTime();
var datetime = new Date();
console.log(datetime);
var timestamp = `${datetime.getDate()}-${datetime.getMonth()}-${datetime.getFullYear()}-${datetime.getHours()}-${datetime.getMinutes()}-${datetime.getSeconds()}`;
console.log(timestamp);

app.post("/create", (req, res, next) => {
  fs.writeFile(
    `./file/${timestamp}.txt`,
    `The Current Timestamp
  is ${datetimes}`,
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
  res.json({
    message: "file created successfully",
  });
});
app.get("/get", (req, res, next) => {
  let time = fs.readdirSync(`./file/`);
  time.forEach((file) => {
    console.log(file);
  });
  res.send(time);
});

// fs.writeFile(`${timestamp}.txt`, `${datetime}`, function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });
// fs.writeFile(
//   `./file/${timestamp}.txt`,
//   `The Current Timestamp ${datetimes}`,
//   function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   }
// );
app.listen(3000);
