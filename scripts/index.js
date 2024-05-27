const { ethers } = require("hardhat");
const { LOTTERYV1 } = require("../Utils/Addresses");

async function main() {
  const [deployer, user] = await ethers.getSigners();
  console.log("Deployer address", await deployer.getAddress());
  console.log("User address", await user.getAddress());

  const LotteryV1 = await ethers.getContractFactory("LotteryV1");
  const lotteryV1 = await LotteryV1.attach(LOTTERYV1);
  const lotteryV1WithUserAsASigner = lotteryV1.connect(user);
  const tx = await lotteryV1WithUserAsASigner.depositToThePool({
    value: ethers.parseUnits("1", "ether"),
  });

  console.log("Transaction successful", tx.hash);
}

main().catch(console.error);
