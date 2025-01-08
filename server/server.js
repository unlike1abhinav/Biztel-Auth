const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

const openApiDocument = YAML.load("./openapi_assignment.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

const users = [];

app.post("/api/auth/signup", (req, res) => {
  const { username, email, password, inviteCode } = req.body;

  if (!username || !email || !password || !inviteCode) {
    return res.status(400).json({ errorMessage: "All fields are required." });
  }

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ errorMessage: "Email already exists." });
  }

  users.push({ username, email, password });
  return res.status(200).json({ message: "Signup successful!" });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ errorMessage: "Email and password are required." });
  }

  const user = users.find((user) => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ errorMessage: "Invalid credentials." });
  }

  const token = `fake-jwt-token-for-${user.username}`;
  return res.status(200).json({ token, username: user.username });
});


app.get("/", (req, res) => {
  res.send("Backend server is running...");
});


app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});