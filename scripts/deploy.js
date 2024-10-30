const hre = require("hardhat");
// const { ethers } = require("hardhat");

async function main() {
    const currentTimeStamp = Math.round(Date.now() / 1000);
    const futureTimeStamp = 365 * 24 * 60 * 60; // 1 saal
    const UnlockedTime = currentTimeStamp + futureTimeStamp;

    const locked = hre.ethers.utils.parseEther('1');
    console.log("Locked amount in Wei:", locked.toString());

    // Get the ContractFactory
    const MyFirst = await hre.ethers.getContractFactory("MyFirst");
    const myFirst = await MyFirst.deploy(UnlockedTime, { value: locked });
    await myFirst.deployed();

    console.log(`Contract deployed with 1 ETH at address: ${myFirst.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
