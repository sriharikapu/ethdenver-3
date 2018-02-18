var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var YumCredit = artifacts.require("./YumCredit.sol");
var YumCoin = artifacts.require("./YumCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(YumCredit);
  deployer.deploy(YumCoin);
};
