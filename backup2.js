var five = require("johnny-five");
var board = new five.Board();

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 8080;

var volta;

board.on("ready", function () {

});

http.listen(PORT, function () {
    console.log('http://localhost:8080');
});

app.get('/', (req, res) => {
    motor = new five.Motor({
        pin: 5
    });
    motor.start(10);
    setTimeout(function () {
        motor.stop();
    }, 500);
    return res.status(200).send({
        message: 'The motor is running'
    });
});
app.get('/exit', (req, res) => {
    motor = new five.Motor({
        pin: 5
    });
    motor.start(10);
    setTimeout(function () {
        motor.stop();
    }, 500);
    return res.status(200).send({
        message: 'The led is stopping'
    });
});
