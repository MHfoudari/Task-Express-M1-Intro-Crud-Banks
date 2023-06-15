let accounts = require("../../accounts");

const getAllaccounts = (req, res) => {
  return res.status(200).json(accounts);
};
const addAnotherAccount = (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;
  const newAccount = req.body;
  accounts.push({
    id: newId,
    ...newAccount,
    funds: 0,
  });
  return res.status(201).json(accounts);
};

const deleteAnAccount = (req, res) => {
  const { accountId } = req.params;
  if (!accounts.find((account) => account.id == accountId)) {
    return res.status(404).json({ message: "Account is deleted" });
  }
  accounts = accounts.filter((account) => account.id != accountId);
  return res.status(204).json({ msg: "deleted!" });
};

const updateAnAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((acc) => acc.id == accountId);
  if (!account)
    return res.status(404).json({
      msg: "Account not found",
    });

  account.username = req.body.username ? req.body.username : account.username;
  account.funds = req.body.funds ? req.body.funds : account.funds;
  return res.status(200).json(accounts);
};

module.exports = {
  getAllaccounts,
  addAnotherAccount,
  deleteAnAccount,
  updateAnAccount,
};
