var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var BLT = artifacts.require("./BLT.sol");

module.exports = function (deployer) {

    // default initialization deployment
    // deployer.deploy(ConvertLib);
    // deployer.link(ConvertLib, MetaCoin);

    const tokenAmount = 1400000;
    deployer.deploy(BLT, tokenAmount);
};
