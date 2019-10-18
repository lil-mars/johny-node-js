var five = require("johnny-five");
var board = new five.Board();

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 8081;

board.on("ready", function () {

  motor = new five.Motor({
    pin: 5
  });
  motor.stop();
});

http.listen(PORT, function () {
  console.log('http://localhost:8080');
});

//max speed 100
app.get('/', (req, res) => {
  motor = new five.Motor({
    pin: 5
  });
  motor.start(200);
  setTimeout(function () {
    motor.stop();
  }, 300);
  return res.status(200).send({
    message: 'The motor is running'
  });
});

//max speed 100
app.get('/exit', (req, res) => {
  motor = new five.Motor({
    pin: 5
  });
  motor.start(200);
  setTimeout(function () {
    motor.stop();
  }, 300);
  return res.status(200).send({
    message: 'The led is stopping'
  });
});
