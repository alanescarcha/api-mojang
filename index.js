const express = require("express");
const app = express();
const v1 = require("./mojang/v1/api");

app.use(express.json({ extended: false }));

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With');
  res.set('Content-Type', 'application/json');
  next();
});

app.use("/mojang/v1", v1);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening API on port: ${PORT}`));
