const { ethers } = require("hardhat");

async function main() {
  const [deployer, user] = await ethers.getSigners();
  console.log("Deployer address", await deployer.getAddress());
  console.log("User address", await user.getAddress());

  const LotteryV1 = await ethers.getContractFactory("LotteryV1");
  const lotteryV1 = await LotteryV1.attach(
    "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  );
  const lotteryV1WithUserAsASigner = lotteryV1.connect(user);
  const tx = await lotteryV1.depositToThePool({
    value: ethers.parseUnits("1", "ether"),
  });

  console.log("Transaction successful", tx.hash);
}

main().catch(console.error);
