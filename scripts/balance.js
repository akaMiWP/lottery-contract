const { ethers } = require("hardhat");
const { LOTTERYV1 } = require("../Utils/Addresses");

async function main() {
  const [deployer, user] = await ethers.getSigners();
  console.log("Deployer address", await deployer.getAddress());
  console.log("User address", await user.getAddress());

  const deployerBalance = await ethers.provider.getBalance(
    await deployer.getAddress()
  );
  const userBalance = await ethers.provider.getBalance(await user.getAddress());

  console.log("Deployer balance", deployerBalance);
  console.log("User balance", userBalance);

  const LotteryV1 = await ethers.getContractFactory("LotteryV1");
  const lotteryV1 = await LotteryV1.attach(LOTTERYV1);
  const lotteryV1Balance = await ethers.provider.getBalance(
    await lotteryV1.getAddress()
  );
  console.log("LotteryV1 balance", lotteryV1Balance);
}

main().catch(console.error);
