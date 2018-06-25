// dependencies
const m3u8Parser = require('m3u8-parser');

// build variants
function m3u8(manifest){
    let parser = new m3u8Parser.Parser();
    parser.push(manifest);
    parser.end();
    manifest = parser.manifest;
    return manifest;
}

// output
module.exports = m3u8;
