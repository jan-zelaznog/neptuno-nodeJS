var router = require('express').Router();

router.get ("/", (req, res, next) => {
	res.send ("Bienvenido a Importadora Neptuno!!");
});

router.use ("/productos", require("./productos"));
router.use ("/categorias", require("./categorias"));
router.use ("/proveedores", require("./proveedores"));

module.exports = router;
