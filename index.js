const express = require("express");
const fs = require("fs");
const app = express();
//app.use(express.json());

//Current TimeStamp
let currenttime = new Date().toLocaleTimeString();
//Date-Time
let datetime = new Date();
//console.log(datetime);
let timestamp = `${datetime.getDate()}-${datetime.getMonth()}-${datetime.getFullYear()}-${datetime.getHours()}-${datetime.getMinutes()}-${datetime.getSeconds()}`;
//console.log(timestamp);

//Creating folder
app.get("/create", (req, res) => {
  fs.writeFile(
    `./file/${timestamp}.txt`,
    `The Current Timestamp
  is ${currenttime}`,
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
  res.send({
    message: "file created successfully",
  });
});

//get the data created
app.get("/get", (req, res) => {
  let time = fs.readdirSync(`./file/`);
  time.forEach((file) => {
    console.log(file);
  });
  res.send(time);
});

app.listen(4000);
