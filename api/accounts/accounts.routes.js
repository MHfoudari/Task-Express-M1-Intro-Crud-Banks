const express = require("express");
const router = express.Router();
const {
  getAllaccounts,
  addAnotherAccount,
  deleteAnAccount,
  updateAnAccount,
} = require("./accounts.controllers");

router.get("/", getAllaccounts);

router.post("/", addAnotherAccount);

router.delete("/:accountId", deleteAnAccount);

router.put("/:accountId", updateAnAccount);

module.exports = router;
