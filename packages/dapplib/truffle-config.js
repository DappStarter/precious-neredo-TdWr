require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember smile include clinic bridge gesture'; 
let testAccounts = [
"0x19cd7a48edd1769abd9472145f52986dfc652f15ab9ec007e226204f392e0bf8",
"0x5d44545d7245f484d24eeb3cd2fe65e5c71fb6a65b0c45b0259d2f7b0f19eec0",
"0x28f0054ee92a13cbf86ad4bf3570d067b9308e52b55d56ff5f03704e978524f4",
"0x7ba1c45618d1635d571967ff2d101af4965eee0938f11ca9a8132ccbf6e08938",
"0x8469da75cf5775ed31825d91613c6ea0540c1f746a8f097135af34eb9cffb2a5",
"0x6b56efb30479b056b7f479bd11f0367a1ba447894f4bdf60617f2faeb3b65887",
"0x29e29892bcecd2947a34c55918c1b432fa52693dcbd5f13036a5d6edc396cd29",
"0xfb3337a27b7f72db2923c4e41a11b365df778b74aea58c7cb42a61b632f27820",
"0x9715d649b5c63636613a89e245a4c5ce9e55fe590ef4514feeff76bf61bd9f1d",
"0xd5a2baa591181fb824a204aabbbfefaa8f7a4a33ffd5cd5871f5d311c9c11dbc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

