const SerialPort = require('serialport');
const express = require('express');

const app = express();
const port = 3001;
const serialPort = new SerialPort('COM6', { baudRate: 9600 });

serialPort.on('open', () => {
    console.log('serial port open');
});

app.get('/write', (req, res) => {
    // TODO: Wrap in try-catch for error handling
    serialPort.write(`${req.query.message}\n`, (err) => {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
