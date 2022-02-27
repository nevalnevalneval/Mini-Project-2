const db = require("../../config/db");
let Validator = require("validatorjs");

function insertProduct(req, res) {
  let dataProduct = req.body;
  let rules = {
    name: "required|min: 5| max: 50",
    quantity: "required|min: 1",
    price: "required|min: 1000",
  };

  const validation = new Validator(dataProduct, rules);
  const insertProductQuery = `INSERT INTO product SET ?;`;
  if (validation.passes()) {
    db.query(insertProductQuery, dataProduct, function (error, results, fields) {
      if (error) throw error;
    });
    res.send({
      message: "Product data has been inserted",
      data: dataProduct,
    });
  } else {
    res.send({ message: "Error on: ", data: validation.errors.all() });
  }
}

function listProduct(req, res) {
  let selectProductQuery = `SELECT * FROM product`;

  db.query(selectProductQuery, function (error, results, fields) {
    if (error) throw error;
    res.send({ messsage: "Product is found", data: results });
  });
}

function updateProduct(req, res) {
  let updateProductQuery = `UPDATE product SET ? WHERE id = ?`;
  let data = [req.body.description, req.params.id];
  let rules = {
    name: "min: 5|max:50",
    quantity: "min: 1",
    price: "min: 1000"
  };
  let validation = new Validator(req.body, rules);
  if (validation.passes()) {
    db.query(updateProductQuery, data, function (error, result, fields) {
      if (error) throw error;
    });

    res.send({ message: "Product has been updated", data: data });
  } else {
    res.send({ message: "Error on: ", data: validation.errors.all() });
  }
}

function deleteProduct(req, res) {
  let deleteProductQuery = `DELETE FROM product WHERE id = ?`;
  let data = [req.params.id];
  db.query(deleteProductQuery, data, function (err, deleted) {
    if (err) throw err;
  });

  res.send({ message: "Product has been deleted" });
}

module.exports = {
  insertProduct,
  listProduct,
  updateProduct,
  deleteProduct,
};
