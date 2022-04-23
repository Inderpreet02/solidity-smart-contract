const main = async () => {
    const transactionContractFactory = await hre.ethers.getContractFactory("Transaction");
    const transationContract = await transactionContractFactory.deploy();
    await transationContract.deployed();
    console.log("Contract deployed to:", transationContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
};

runMain();
  