require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue return stereo snow install person equal gasp'; 
let testAccounts = [
"0x621d51ca3088e94851480f461e81ffdac36069a153412fd686802138e0255e64",
"0x88b5523161d8eaee81a079cb2e1a4504ae86819d95ba39f760df38afd0ee580b",
"0x69654d1c644ad9b99d59e6139f47d1425b3e13e69c8952a85a03f3fd535a6c81",
"0xa824b845fa2c39f9c15555e053cee9fd1e646974bfdc77f2ae70d59a63c9d860",
"0xe483a4973359ddf8e0200be8f8e139c5a0322be3654232ebdda2fa6c019566f9",
"0x639cba5fe1bff808573e0373cd42c1c5d73663054559a11b63fc9d765949b833",
"0xc6877cfa0240fc5eeea7142654975cb129600bcb6fa8eff2d5aa80c4692d208b",
"0xc7a83b748cb4bd54907d4ab2fa0aa6880c7cbae2fd02a1cabcfa7cbfea973260",
"0x08c9073cf876997827210d5bebfc854aebbfee463b30fe7cd7856e4e30f75e85",
"0x9b6ee017446245edc0647f36615301fca7ad3f745fa993b9abb3c6f190acaabe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
