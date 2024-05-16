// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract LotteryV1 {
    address[] public participators;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function depositToThePool() external payable {
        require(msg.value >= 100000000000000000);
        participators.push(msg.sender);
    }

    function pickTheWinner() public {
        require(msg.sender == owner, "Reserve for the owner only");
        require(address(this).balance > 0, "Not enough money in the pool");
        uint randomHash = uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, participators.length)));
        address winner = participators[randomHash % participators.length];
        (bool success,) = winner.call { value: address(this).balance }("");
        require(success, "Unable to so transfer money to the winner");
        delete participators;
    }
}