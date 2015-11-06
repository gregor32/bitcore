var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('a1a0a2a3'),
  addressVersion: 0x57,
  privKeyVersion: 215,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('e79e542410a078c0e67598b954843567583a96afedb92d3f6ec7efd7a30b0000'),
    merkle_root: hex('88ebedfcc241e892c607b4e3d262176060697f69556a6cd8cfd0c46eac7fc6b1'),
    height: 0,
    nonce: 1531910,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1439734139,
    bits: 504365055,
  },
  dnsSeeds: [
    'node1.clickcoin.click',
    'node2.clickcoin.click',
    'node3.clickcoin.click',
    'node4.clickcoin.click'
  ],
  defaultClientPort: 36352
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
