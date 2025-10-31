const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Production Node.js App Running on Kubernetes!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

