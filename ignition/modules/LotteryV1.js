const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("LotteryV1", (m) => {
  // const signers = ethers.getSigners();
  // const deployer = signers[0];

  // const lotteryV1 = m.contract("LotteryV1", deployer);
  const lotteryV1 = m.contract("LotteryV1");
  return { lotteryV1 };
});
