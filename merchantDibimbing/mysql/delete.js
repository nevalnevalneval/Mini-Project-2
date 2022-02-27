const db = require('../config/db');

let deleteMerchantQuery = `DELETE FROM merchant WHERE id = ?`;
let data = [4];

db.query(deleteMerchantQuery, data, function (err, deleted) {
    if (err) throw err;
    console.log(deleted);
});

let deleteProductQuery = `DELETE FROM product WHERE id = ?`;
let data = [2];

db.query(deleteProductQuery, data, function (err, deleted) {
    if (err) throw err;
    console.log(deleted);
});