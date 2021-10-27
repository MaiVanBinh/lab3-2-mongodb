const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const docs = require('./swagger.json');

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));

// connect with database
const dbUserName = "binh";
const dbPw = "binh";
const dbName = "lab3";
const MONGO_URI = `mongodb+srv://${dbUserName}:${dbPw}@cluster0.5zjmf.mongodb.net/${dbName}`;
mongoose.connect(MONGO_URI, () => {
  console.log("Connected to DB");
});

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

require("./app/routes")(app);

app.listen(PORT, () =>
  console.log(
    `Hello world app listening on port ${PORT} with url http://localhost:${PORT}`
  )
);
