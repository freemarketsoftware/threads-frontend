require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
   solidity: "0.8.3",
   paths: {
     artifacts: './src/artifacts',
   },
   networks: {
     hardhat: {
       chainId: 1337
     },
     ropsten: {
       url: "https://ropsten.infura.io/v3/8f16fec32109439f870e6c6f29b88fec",
       accounts: [`0x3812f3bf1e2421165c3ec1a6ae4934ff868d665edf40346a318b09fd37d64996`]
     }
   }
 };
