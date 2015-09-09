
// requirements
var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

// app.get('/:add/:number1/:number2', function (req, res){
//   var num1 = req.params.number1;
//   var num2 = req.params.number2;
//   var sum = parseInt(num1) + parseInt(num2);
//   res.render('index', {sum: sum});
// });
// app.get('/sub/:number1/:number2', function (req, res){
//   var num1 = req.params.number1;
//   var num2 = req.params.number2;
//   var sum = parseInt(num1) - parseInt(num2);
//   res.render('index', {sum: sum});
// });

// app.get('/mult/:number1/:number2', function (req, res){
//   var num1 = req.params.number1;
//   var num2 = req.params.number2;
//   var sum = parseInt(num1) * parseInt(num2);
//   res.render('index', {sum: sum});
// });

// app.get('/div/:number1/:number2', function (req, res){
//   var num1 = req.params.number1;
//   var num2 = req.params.number2;
//   var sum = parseInt(num1) / parseInt(num2);
//   res.render('index', {sum: sum});
// });

app.get('/:operator/:var1/:var2', function (req, res){
  
  var operator = req.params.operator;
  var num1 = req.params.var1;
  var num2 = req.params.var2;
  var result;

  if(operator === "add"){
    result = parseInt(num1) + parseInt(num2);
  }
  else if(operator === "sub"){
    result = parseInt(num1) - parseInt(num2);
  }
  else if(operator === "div"){
    result = parseInt(num1) / parseInt(num2);
  }
  else if(operator === "mult"){
    result = parseInt(num1) * parseInt(num2);
  }
  else{
    result = "please specify an operator";
  }
  res.render("index", {result: result});
});







// start the server
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});