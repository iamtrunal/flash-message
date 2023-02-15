const router = require('express').Router();

const {
    flashMessage,
    alertMessage
} = require("../controllers/app.controller");

router.get('/message', flashMessage);
router.post('/alert', alertMessage);

module.exports = router