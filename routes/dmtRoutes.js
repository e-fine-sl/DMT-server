const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware');
const { verifyLicense } = require('../controllers/dmtController');

// Public health check — no API key needed
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'DMT routes are working',
    database: 'dmt_db'
  });
});

// License verification — requires API key
// Full endpoint: POST /api/dmt/verify-license
router.post('/verify-license', validateApiKey, verifyLicense);

module.exports = router;
