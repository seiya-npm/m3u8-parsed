// dependencies
const m3u8Parser = require('m3u8-parser');

// build variants
function m3u8(manifest,customParsers){
    let parser = new m3u8Parser.Parser();
    if(customParsers){
        for(let p of customParsers){
            if(p.isArray){
                p.dataParser = arrayParser(parser, p.customType);
            }
            delete p.isArray;
            parser.addParser(p);
        }
    }
    parser.push(manifest);
    parser.end();
    return parser.manifest;
}

// custom array
function arrayParser(self, name) {
    return function(line) {
        let l = line.split(':');
        l.shift();
        let data = l.join(':');
        if(l.length == 1){
            data = parseFloat(data);
        }
        let res = [];
        let m = this.manifest.custom;
        if(m !== undefined && m[name] !== undefined){
            res = m[name];
        }
        res.push(data);
        return res;
    }.bind(self)
}

// output
module.exports = m3u8;
