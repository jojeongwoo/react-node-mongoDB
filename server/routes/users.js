var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json([
    {
      id:1,
      username:'jeongwoo'
    },
    {
      id:2,
      username:'youjeong'
    }
  ]);
})

module.exports = router;