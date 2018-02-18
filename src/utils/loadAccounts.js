import getWeb3 from './getWeb3'

export default new Promise((resolve, reject) => {
  getWeb3.then(({ web3 }) => {
    web3.eth.getAccounts((error, accounts) => {
      if (error) reject(error)
      resolve(accounts)
    })
  })
})
