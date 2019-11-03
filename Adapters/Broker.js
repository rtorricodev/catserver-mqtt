let mosca = require('mosca');

class Broker{
    constructor(port){
        this.settings = {
            port: port
        }
    }

    initialize(){
        this.server = new mosca.Server(this.settings);

        this.server.on('ready',()=>{
            console.log('The server is ready on port: ' + this.settings.port ); 
        })
    }

}

module.exports = Broker;