let Broker = require('./Adapters/Broker.js');

let broker = new Broker(1883);
broker.initialize();