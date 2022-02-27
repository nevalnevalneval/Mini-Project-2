const db = require('../config/db');

let selectMerchantQuery = `SELECT * FROM merchant`;
db.query(selectMerchantQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('List merchant: ', results);
});

let selectProductQuery = `SELECT * FROM product`;
db.query(selectProductQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('List product: ', results);
});