const express = require("express");
const merchantRoute = require("../controllers/merchant.controller");
const productRoute = require("../controllers/product.controller");
const loginRoute = require("../controllers/login.controller");

const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Hello !" })
});

router.post('/login', loginRoute.login);

router.get("/merchant", authMiddleware.isAuthenticate, merchantRoute.listMerchant);
router.post("/merchant", authMiddleware.isAuthenticate, merchantRoute.insertMerchant);
router.put("/merchant/:id", authMiddleware.isAuthenticate, merchantRoute.updateMerchant);
router.delete("/merchant/:id", authMiddleware.isAuthenticate, merchantRoute.deleteMerchant);

router.get("/product", authMiddleware.isAuthenticate, productRoute.listProduct);
router.post("/product", authMiddleware.isAuthenticate, productRoute.insertProduct);
router.put("/product/:id", authMiddleware.isAuthenticate, productRoute.updateProduct);
router.delete("/product/:id", authMiddleware.isAuthenticate, productRoute.deleteProduct);

module.exports = router;