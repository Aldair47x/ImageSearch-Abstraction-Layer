var express = require('express');
var router = express.Router();
var searchTerm = require('../models/searchTerm.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/imagesearch/:searchValue*', (req,res,next) =>{
   var {searchValue} = req.params;
   var {offset} = req.query;
  

   var data = new searchTerm({
     searchValue,
     searchDate : new Date()
   });


   data.save(err => {
     if(err){
      return res.send("Error saving in the DB");
     }
     

     return res.json({data});
   })
   
})



module.exports = router;
