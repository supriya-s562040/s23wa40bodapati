var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.fround(x);
    let t=Math.random(x);
    let n=Math.round(x);
    
  res.render('computation', { x:x,fround:r, random:t, round:n});
});

module.exports = router;
