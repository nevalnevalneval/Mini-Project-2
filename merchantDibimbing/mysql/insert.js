const db = require('../config/db');

let dataMerchant = [
    {username: "Hanyang", password: "shy929", phone_number: 08092997, address: "flover Apt, no. 2"},
    {username: "Saerom", password: "lsr107", phone_number: 08010797, address: "flover Apt, no. 1"},
    {username: "Gyuri", password: "jgr1227", phone_number: 08122797, address: "flover Apt, no. 3"}
];

dataMerchant.forEach (value => {
    let insertMerchantQuery = `INSERT INTO merchant SET (?);`
    db.query(insertMerchantQuery, value, function (error, results, fields) {
        if (error) throw error;
        console.log('Data has been inserted');
    });
});

let dataProduct = [
    {merchant_id: 1, name: "Love Bomb", quantity: 124, price: 18000},
    {merchant_id: 2, name: "FUN!", quantity: 124, price: 15000},
    {merchant_id: 3, name: "DM", quantity: 124, price: 24000}
];

dataProduct.forEach (value => {
    let insertProductQuery = `INSERT INTO product SET (?);`
    db.query(insertProductQuery, value, function (error, results, fields) {
        if (error) throw error;
        console.log('Data has been inserted');
    });
});