var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

//force http request instead of https
app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://'+ req.hostname + req.url);
  }else{
    next();
  }
});

//What folder to serve
app.use(express.static('public'));


app.listen(PORT, function(){
    console.log('Express server is up on port' + PORT);
});
