const express = require("express");
const PORT = 8000;
let accounts = require("./accounts");
const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

app.get("/accounts", (req, res) => {
  console.log("Providing the accounts' details....");
  return res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  const newAccount = accounts[accounts.length - 1].id + 1;
  const value = req.body;
  accounts.push({
    id: newAccount,
    ...value,
    funds: 0,
  });
  console.log(value);
  return res.status(201).json(accounts);
});

app.delete("/accounts/:accId", (req, res) => {
  const { accountId } = req.params;
  if (!accounts.find((a) => a.id == accountId)) {
    return res.status(404).json({ message: "not found" });
  }
  accounts = accounts.filter((account) => account.id != accountId);
  return res.status(200).json(accounts);
});
