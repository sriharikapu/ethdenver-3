const FoodCredit = artifacts.require("./FoodCredit.sol");

contract('FoodCredit', accounts => {
    var owner = accounts[0]
    let credits

    beforeEach(async function () {
        credits = await FoodCredit.new({ from: owner })
    })

    it('test it stores pantry name', async function () {
        credits.setPantry("Irving Park Pantry")
        const pantry = await credits.getPantry();

        assert.equal(pantry, "Irving Park Pantry")
    })

    it('test it stores grocery name', async function () {
        credits.setPantry("Whole Foods")
        const grocery = await credits.getPantry();

        assert.equal(grocery, "Whole Foods")
    })
})