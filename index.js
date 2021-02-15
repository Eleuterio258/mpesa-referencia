const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  function uuidv4() {
    return (
      currentYear +
      "-4xxx-yxxx-xxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
    );
  }

  res.json({ uuid: uuidv4() });
});
app.listen(port, () => console.log());
