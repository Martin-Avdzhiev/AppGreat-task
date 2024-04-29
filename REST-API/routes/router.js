const userController = require("../controllers/userController.js");
//const noteController = require("../controllers/noteController.js");
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/', userController);
//router.use('/notes', noteController);

module.exports = router;