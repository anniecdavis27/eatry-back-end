const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const foodsController = require("./controllers/foods");
const userController = require("./controllers/userRoutes");
const passport = require("passport");
const PORT = process.env.PORT || 4000;

require("./config/passport")(passport);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use("/api/foods", foodsController);
app.use("/api/user", userController);

app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`PORT: 4000 ${app.get("4000")} `);
// });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
