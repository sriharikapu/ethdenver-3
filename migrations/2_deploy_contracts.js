var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var FoodCredit = artifacts.require("./FoodCredit.sol");
var YumCoin = artifacts.require("./YumCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(FoodCredit);
  deployer.deploy(YumCoin);
};
