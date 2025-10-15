const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.port || 80;

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors({ origin: "*" }));

const staticBase = path.resolve('./angular/dist/angular/');

const staticFilesPath = path.join(staticBase, "browser");

app.use(express.static(staticFilesPath));

app.use((req, _res, next) => { /* console.log(req.method, req.url); */ next(); });

app.get("/", (_req, res) => {
  res.sendFile(path.join(staticFilesPath, "index.html"));
});


app.listen(PORT, "0.0.0.0", async () => {
  console.log('server running on port ', PORT);
});
