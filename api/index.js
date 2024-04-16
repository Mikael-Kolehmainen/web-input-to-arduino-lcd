const SerialPort = require('serialport');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
const serialPort = new SerialPort('COM6', { baudRate: 9600 });

app.use(cors());

serialPort.on('open', () => {
  console.log('serial port open');
});

app.get('/write', (req, res) => {
  (async () => {
    try {
      await serialPort.write(`${req.query.message}\n`);
      console.log('message written');
      res.status(200).send();
    } catch (error) {
      res.status(400).send();
      console.error('Error on write: ', error.message);
      console.error(error);
    }
  })();
})

app.get('/clear', (req, res) => {
  (async () => {
    try {
      await serialPort.write(' ');
      console.log('display cleared');
      res.status(200).send();
    } catch (error) {
      res.status(400).send();
      console.error('Error on write: ', error.message);
      console.error(error);
    }
  })();
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
