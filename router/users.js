const express = require("express");
const router = express.Router();
const {handelUserSignUp,handelUserLogin}=require('../controllers/user')

router.post('/',handelUserSignUp)
router.post('/login',handelUserLogin)




module.exports = router;
