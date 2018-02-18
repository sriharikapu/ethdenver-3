pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract FoodCredit is StandardToken, Ownable {
    address owner;
    string public grocery;
    string public pantry;

    struct Item {
        uint256 price;
        uint256 weight;
        uint256 units;
        string description;
        string date;
        string expDate;
        string contact;
    }

    function FoodCredit() public {}

    function setGrocery(string _grocery) public {
        grocery = _grocery;
    }

    function getGrocery() public view returns (string) {
        return grocery;
    }

    function setPantry(string _pantry) public {
        pantry = _pantry;
    }

    function getPantry() public view returns (string) {
        return pantry;
    }
}