const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

require('./app/routes')(app);

app.listen(PORT, () =>
  console.log(
    `Hello world app listening on port ${PORT} with url http://localhost:${PORT}`
  )
);
