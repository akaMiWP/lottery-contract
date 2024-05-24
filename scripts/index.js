const { ethers } = require("hardhat");

async function main() {
  const [deployer, user] = await ethers.getSigners();
  const LotteryV1 = await ethers.getContractFactory("LotteryV1");
  const lotteryV1 = await LotteryV1.attach(
    "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  );
}
