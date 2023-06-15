const express = require("express");
const accountRoutes = require("./api/accounts/accounts.routes");
let accounts = require("./accounts");

const PORT = 8000;
const app = express();

app.use(express.json());

app.use("/accounts", accountRoutes);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
