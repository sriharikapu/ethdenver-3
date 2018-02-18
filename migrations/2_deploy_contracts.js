var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var FoodCredit = artifacts.require("./FoodCredit.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(FoodCredit);
};
