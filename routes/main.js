const express = require('express');
const router = express.Router();

let count = 0;

router.get('/count', (req, res) => {
  count++
  res.send(count.toString());
});

router.get('/123', (req, res, next) => {
  res.json({ a: 123});
  next();
});

// router.get('/124', (req, res) => {
//   res.json({ a: 124});
// });

router.get('/video/home.mp4', (req, res) => {
  res.json({ a: 'look in VS code console '});
 console.log( 'A-a-aaa-aaa-aaaa');
});

module.exports = router;