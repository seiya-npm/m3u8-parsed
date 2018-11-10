const fs = require('fs');
const m3u8 = require('./main.js');

const manifest1 = fs.readFileSync("test/test1.m3u8", "utf8");
console.log(m3u8(manifest1));
console.log();

const manifest2 = fs.readFileSync("test/test2.m3u8", "utf8");
console.log(m3u8(manifest2));
console.log();

const manifest3 = fs.readFileSync("test/test3.m3u8", "utf8");
console.log(m3u8(manifest3,[
    {
        expression: /^#VOD-MYVAL(?!3)/,
        customType: 'myData1',
        isArray: true
    },
    {
        expression: /^#VOD-MYVAL3/,
        customType: 'myData3',
        dataParser: function(line) {
            return line.split(':')[1];
        }
    }
]));