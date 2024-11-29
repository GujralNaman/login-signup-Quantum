const http = require("http");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const url = require("url");
const User = require("./models/User");
const connectDB = require("./config/db");

connectDB();  //mongoDb connection 

const parseBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => resolve(JSON.parse(body)));
    req.on("error", reject);
  });

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (method === "OPTIONS") return res.end();

  try {
    if (path === "/register" && method === "POST") {
      const { name, dateOfBirth, email, password } = await parseBody(req);
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, dateOfBirth, email, password: hashedPassword });
      await user.save();

      const token = jwt.sign({ email }, "your_jwt_secret");
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ token, user }));
    } 
    else if (path === "/login" && method === "POST") {
      const { email, password } = await parseBody(req);
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid credentials" }));
        return;
      }

      const token = jwt.sign({ email }, "your_jwt_secret");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ token, user }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Endpoint not found" }));
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
