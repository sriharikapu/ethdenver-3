var YumCoin = artifacts.require('./YumCoin.sol')

module.exports = function (deployer) {
  deployer.deploy(YumCoin)
}
