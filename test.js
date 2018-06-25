const fs = require('fs');
const m3u8 = require('./main.js');

const manifest1 = fs.readFileSync("test1.m3u8", "utf8");
console.log(m3u8(manifest1));

const manifest2 = fs.readFileSync("test2.m3u8", "utf8");
console.log(m3u8(manifest2));