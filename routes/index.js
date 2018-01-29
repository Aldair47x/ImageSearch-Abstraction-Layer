var express = require('express');
var router = express.Router();
var Schema = require('../models/Schema.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/imagesearch/:searchValue*', (req,res,next) =>{
   var {searchValue} = req.params;
   var {offset} = req.query;

   return res.json({searchValue,offset});
})



module.exports = router;
