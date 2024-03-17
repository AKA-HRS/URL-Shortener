const express = require('express');
const { handelGenerateNewShortURL,handelGetNewShortURL,handelGetShortURLAnalytics } = require("../controllers/url");
const router = express.Router();

router.post('/', handelGenerateNewShortURL);
router.get('/:shortId',handelGetNewShortURL);
router.get('/analytics/:shortId',handelGetShortURLAnalytics)



module.exports = router;
