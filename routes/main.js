const express = require('express');
const router = express.Router();

router.get('/123', (req, res) => {
  res.json({ a: 123});
});

module.exports = router;