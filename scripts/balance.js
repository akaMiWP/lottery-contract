const { ethers } = require("hardhat");

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
}

main().catch(console.error);
