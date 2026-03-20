// server.js
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({ noCors: false });

// استخدم middlewares مثل CORS
server.use(middlewares);

// عند فتح Home "/" نعرض كل محتويات db.json
server.get("/", (req, res) => {
  res.json(router.db.getState());
});

// استخدم جميع المسارات الافتراضية
server.use(router);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
