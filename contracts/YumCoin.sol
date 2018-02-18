pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract YumCoin is MintableToken {
    string public constant NAME = "Yum Coin";
    string public constant SYMBOL = "YUM";
    uint8 public constant DECIMALS = 18;

    function YumCoin() public {}

    function getName() public pure returns (string) {
        return NAME;
    }

    function getSymbol() public pure returns (string) {
        return SYMBOL;
    }

    function getDecimals() public pure returns (uint8) {
        return DECIMALS;
    }
}
