var YumCredit = artifacts.require("./YumCredit.sol");
var YumCoinCrowdSale = artifacts.require("./YumCoinCrowdSale.sol");
var Web3 = web3;

module.exports = function (deployer, network, accounts) {
  const startTime = Web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 // 10 second in the future
  const endTime = startTime + (86400 * 20) // 20 days in the future
  const rate = new Web3.BigNumber(1000)
  const wallet = accounts[0]

  deployer.deploy(YumCredit);
  deployer.deploy(YumCoinCrowdSale, startTime, endTime, rate, wallet)
};
