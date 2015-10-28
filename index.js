#! /usr/bin/env node
'use strict';

// Thanks to https://github.com/chris-rock/node-crypto-examples'
// And http://lollyrock.com/articles/nodejs-encryption/

// Requirements
const fs      = require('fs');
const zlib    = require('zlib');
const path    = require('path');
const crypto  = require('crypto');

// Constants
const algorithm = 'aes-256-ctr';
const userArgs = process.argv.slice(2);

// Input
const fileLocation = path.normalize(path.join(process.cwd(), userArgs[0]));
const secretPhrase = userArgs[1] || 'ProbablyNotGoingToBeSecure';
const secretMode = userArgs[2];

// Functions
function encryptAndSave() {
  let zip = zlib.createGzip();
  let encrypt = crypto.createCipher(algorithm, secretPhrase);
  let fileToEncrypt = fs.createReadStream(fileLocation);
  let outputFile = fs.createWriteStream(path.join(path.dirname(fileLocation), (path.parse(fileLocation).name + '.zip')));

  fileToEncrypt.pipe(zip).pipe(encrypt).pipe(outputFile);
}

function decryptAndSave() {
  let unzip = zlib.createGunzip();
  let decrypt = crypto.createDecipher(algorithm, secretPhrase);
  let fileToDecrypt = fs.createReadStream(fileLocation);
  let outputFile = fs.createWriteStream(path.join(path.dirname(fileLocation), (path.parse(fileLocation).name + 'DELETE.txt')));

  fileToDecrypt.pipe(decrypt).pipe(unzip).pipe(outputFile);
}

// Control flow
if (secretMode === 'decrypt') {
  decryptAndSave();
} else {
  encryptAndSave();
}
