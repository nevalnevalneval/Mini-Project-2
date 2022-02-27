const db = require('../config/db');

let updateMerchantQuery = `UPDATE merchant SET username = ? WHERE id = ?`;
let data = ['Romsae', 1];

db.query(updateMerchantQuery, data, function (err, updated) {
    if (err) throw error;
    console.log(updated);
});

let updateProductQuery = `UPDATE product SET username = ? WHERE id = ?`;
let data = ['Talk&Talk', 2];

db.query(updateProductQuery, data, function (err, updated) {
    if (err) throw error;
    console.log(updated);
});