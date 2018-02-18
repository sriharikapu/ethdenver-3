pragma solidity ^0.4.18;

import './YumCoin.sol';

contract YumCredit {
    address owner;
    string grocery;
    string public pantry;

    function YumCredit() public {
        owner = msg.sender;
    }

    function setPantry(string _pantry) public {
        pantry = _pantry;
    }

    function getPantry() public view returns (string) {
        return pantry;
    }
}