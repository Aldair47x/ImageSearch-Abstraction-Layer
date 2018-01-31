var express = require('express');
var router = express.Router();
//You need to put here your bing api key
//var Bing = require('node-bing-api')({accKey:'xxxxxxxx'});
var searchTerm = require('../models/searchTerm.js');
const { Requester } = require("node-duckduckgo");
const requester = new Requester("app");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/recentsearchs',(req,res,data)=>{
  searchTerm.find({}, (err,data)=>{
    res.json(data);
  });
});

router.get('/api/imagesearch/:searchValue*', (req,res,next) =>{
  var {searchValue} = req.params;
  var {offset} = req.query;
  var searchOffSet;
  var data = new searchTerm({
    searchValue,
    searchDate : new Date()
  });


  data.save(err => {
    if(err){
      return res.send("Error saving in the DB");
    }
  });
 /* 
  Bing.images(searchValue, {
    top:(10 * searchOffSet),
    skip:(10 * offset)
  },
  function(error,rez,body){
    var bingDataSet = [];

    for(var i=0;i<10;i++)
    {
      bingDataSet.push({
        url: body.value[i].webSearchUrl[i],
        snippet: body.value[i].name,
        thumbnail: body.value[i].thumbnailUrl,
        context: body.value[i].hostPageDisplayUrl
      });
    }

  res.json(bingDataSet);  
  }
);



Bing.images(searchValue, {
  top:10
},
function(error,rez,body){

res.json(body);  
}
);
*/
//Api duck duck go
const formatter = requester.formatter;
formatter.pretty = 1;
requester.no_html = 1;
requester.no_redirect = 1;
requester.request(searchValue,
(err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  res.json({body})
});

   
})



module.exports = router;
