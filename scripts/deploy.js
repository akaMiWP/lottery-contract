const { ethers } = require("hardhat");

async function main() {
  const LotteryV1 = await ethers.getContractFactory("LotteryV1");
  console.log("Deploying LotteryV1...");
  const lotteryV1 = await LotteryV1.deploy();
  console.log("LotteryV1 deployed to:", await lotteryV1.getAddress());
  console.log(
    "LotteryV1 balance:",
    await ethers.provider.getBalance(await lotteryV1.getAddress())
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    process.exit(1);
  });
