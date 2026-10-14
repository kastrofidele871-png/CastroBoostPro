const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Castro Boost Pro API fonctionne 🚀"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Castro Boost Pro"
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Castro Boost Pro démarré sur le port ${PORT}`);
});
