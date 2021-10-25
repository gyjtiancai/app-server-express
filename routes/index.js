var express = require('express');
/*  express.Router([options]) 
    default options: 
    { 
      caseSensitive: false, ---if false, /Home is same as /home
      mergeParams: false,
      strict: false,  ------if false, /home is same as /home/
    }
*/
var router = express.Router();
var path = require('path');
var fs = require('fs');
let accessCount = 0

//add index router log
router.use(function timeLog(req, res, next) {
  console.log('router time: ', Date.now())
  next()
})

// render home page
router.get('/', function (req, res, next) {
  const asscessWord = `website access count is: ${++accessCount}`
  // record access count
  fs.writeFile(path.join(__dirname, '../logs', 'access.log'), asscessWord, (err) => {
    if (err) throw err;
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
