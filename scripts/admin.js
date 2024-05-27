const { ethers } = require("hardhat");
const { LOTTERYV1 } = require("../Utils/Addresses");

async function main() {
  const [deployer, user] = await ethers.getSigners();
  console.log("Deployer address", await deployer.getAddress());
  console.log("User address", await user.getAddress());

  const LotteryV1 = await ethers.getContractFactory("LotteryV1");
  const lotteryV1 = await LotteryV1.attach(LOTTERYV1);

  const lotteryV1WithDeployerAsASigner = lotteryV1.connect(deployer);
  const tx = await lotteryV1WithDeployerAsASigner.pickTheWinner();

  console.log("Transaction successful", tx.hash);
}

main().catch(console.error);
