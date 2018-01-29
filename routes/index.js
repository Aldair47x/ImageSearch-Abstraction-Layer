var express = require('express');
var router = express.Router();
var Bing = require('node-bing-api')({accKey:'d946a1f9428048e08ad3456b394da127'});
var searchTerm = require('../models/searchTerm.js');
//const { Requester } = require("node-duckduckgo");
//const requester = new Requester("app");



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

*/

Bing.images(searchValue, {
  top:10
},
function(error,rez,body){

res.json(body);  
}
);

//Api duck duck go

/*
requester.skip_disambig = offset * 10;
requester.format = "json";
requester.pretty = 1;
requester.request(searchValue,
(err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  var bingDataSet = [];

  for(var i=0;i<10;i++)
  {
    bingDataSet.push({
    url: body.Url,
    snippet: body.Heading,
    thumbnail: body.Icon,
    context: body.DefinitionSource
    });
  }
  res.json(bingDataSet);  
});
*/

   
})



module.exports = router;
