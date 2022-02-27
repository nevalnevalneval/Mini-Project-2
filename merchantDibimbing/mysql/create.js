const db = require("../config/db");

let createMerchantQuery = `
CREATE TABLE IF NOT EXISTS merchant (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR (50) NOT NULL,
    address VARCHAR (100) NOT NULL,
    phone_number INT (15) NOT NULL,
    join_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`;

db.query(createMerchantQuery, function (error, results, fields) {
  if (error) throw error;
  console.log("Table has been created");
});

let createProductQuery = `
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    merchant_id INT NOT NULL,
    name VARCHAR(50) DEFAULT NULL,
    quantity INT(10) DEFAULT NULL,
    price INT(50) DEFAULT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
    FOREIGN KEY (merchant_id) REFERENCES merchant (id)
)
COLLATE='utf8mb4_general_ci'
;
`;

db.query(createProductQuery, function (error, results, fields) {
  if (error) throw error;
  console.log("Table has been created");
});

db.end();