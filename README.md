# m3u8-parsed
[![npm](https://img.shields.io/npm/v/m3u8-parsed.svg?style=flat-square)](https://npmjs.com/m3u8-parsed)
[![npm downloads](https://img.shields.io/npm/dm/m3u8-parsed.svg?style=flat-square)](https://npmjs.com/m3u8-parsed)

## Install
```
npm i m3u8-parsed
```

## Usage
```
const m3u8 = require('m3u8-parsed');
const fs = require('fs');
const parsed =  fs.readFileSync('manifest.m3u8', 'utf8');
console.log(m3u8(parsed));
```