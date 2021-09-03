let stringUtils = require("./string-utils");
let net = require('net');

let forwarding = {
    run: function () {
        // validate args
        let ipHostRegex = /^(([a-zA-Z\-\.0-9]+):)?(\d+)$/;
        let address = {
            from: ipHostRegex.exec(process.argv[2]),
            to: ipHostRegex.exec(process.argv[3])
        };
        if (stringUtils.isNotNull(address.from) || stringUtils.isNotNull(address.to)) {
            console.log("Wrong format! Using:  forwarding <sourceIp>:<sourcePort> <hostIp>:<hostPort>");
            return;
        }

        net.createServer(function (from) {
            var to = net.createConnection({
                host: address.to[2],
                port: address.to[3]
            });

            from.on('error', function (e) {
                console.log('Source error: ' + e);
            }).pipe(to);

            to.on('error', function (e) {
                console.log('Dest error: ' + e);
            }).pipe(from);
        }).listen(address.from[3], address.from[2], function () {
            console.log('Forwaring started!');
        });

    }
}




module.exports = forwarding;