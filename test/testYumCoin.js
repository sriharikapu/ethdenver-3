const YumCoin = artifacts.require("./YumCoin.sol");

contract('YumCoin', accounts => {
    let yum

    beforeEach(async function () {
        yum = await YumCoin.new()
    })

    it('test we can get the new Yum coin name', async function () {
        const name = await yum.getName();
        assert.equal(name, "Yum Coin");
    })

    it('test we can get the new Yum coin symbol', async function () {
        const symbol = await yum.getSymbol();
        assert.equal(symbol, "YUM");
    })

    it('YUM coin should have a set 18 decimals', async function () {
        const decimals = await yum.getDecimals();
        assert.equal(decimals, 18);
    })
})