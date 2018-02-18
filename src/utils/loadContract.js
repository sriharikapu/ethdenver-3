import YumCoinContract from '../../build/contracts/YumCoin.json'

import getWeb3 from './getWeb3'

export default new Promise((resolve, reject) => {
  getWeb3.then(({ web3 }) => {
    const contract = require('truffle-contract')
    const yumCoin = contract(YumCoinContract)

    yumCoin.setProvider(web3.currentProvider)

    yumCoin.deployed().then(instance => {
      resolve(instance)
    })
  })
})
