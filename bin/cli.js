#!/usr/bin/env node

let path = require('path');
let fs = require('fs');
let lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
let forwarding = require(lib + "/lib.js");
forwarding.run();