var five = require("johnny-five");
var board = new five.Board();

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 8080;

var volta;

board.on("ready", function() {

});  

http.listen(PORT,function(){
  console.log('http://localhost:8080');
});

app.get('/',(req,res)=>{
  var led = new five.Led(13);
  led.on();
  setTimeout(function()
  {
    led.stop();
    led.off();
  }, 1500);
    return res.status(200).send({
      message: 'The led is blinking'
    });
});
app.get('/exit',(req,res)=>{
  var led = new five.Led(13);
  led.blink();
  setTimeout(function()
  {
    led.stop();
    led.off();
  }, 1500);
    return res.status(200).send({
      message: 'The led is blinking'
    });
});
