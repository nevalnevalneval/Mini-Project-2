const db = require("../../config/db");
let Validator = require("validatorjs");

function insertMerchant(req, res) {
  let dataMerchant = req.body;
  let rules = {
    username: "required|min: 5| max: 50",
    password: "required|min: 5",
    address: "required",
    phone_number: "required",
  };

  const validation = new Validator(dataMerchant, rules);
  const insertMerchantQuery = `INSERT INTO merchant SET ?;`;
  if (validation.passes()) {
    db.query(
      insertMerchantQuery,
      dataMerchant,
      function (error, results, fields) {
        if (error) throw error;
      }
    );
    res.send({
      message: "Merchant data has been inserted",
      data: dataMerchant,
    });
  } else {
    res.send({ message: "Error on: ", data: validation.errors.all() });
  }
}

function listMerchant(req, res) {
  let selectMerchantQuery = `SELECT * FROM merchant`;

  db.query(selectMerchantQuery, function (error, results, fields) {
    if (error) throw error;
    res.send({ messsage: "Data is found", data: results });
  });
}

function updateMerchant(req, res) {
  let updateMerchantQuery = `UPDATE merchant SET ? WHERE id = ?`;
  let data = [req.body.description, req.params.id];
  let rules = {
    username: "min: 5|max:50",
    password: "min: 5",
  };
  let validation = new Validator(req.body, rules);
  if (validation.passes()) {
    db.query(updateMerchantQuery, data, function (error, result, fields) {
      if (error) throw error;
    });

    res.send({ message: "Data has been updated", data: data });
  } else {
    res.send({ message: "Error on: ", data: validation.errors.all() });
  }
}

function deleteMerchant(req, res) {
  let deleteMerchantQuery = `DELETE FROM merchant WHERE id = ?`;
  let data = [req.params.id];
  db.query(deleteMerchantQuery, data, function (err, deleted) {
    if (err) throw err;
  });

  res.send({ message: "Data has been deleted" });
}

module.exports = {
  insertMerchant,
  listMerchant,
  updateMerchant,
  deleteMerchant,
};
