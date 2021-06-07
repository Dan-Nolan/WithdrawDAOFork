require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.3"
      },
      {
        version: "0.8.4"
      }
    ]
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_API,
        blockNumber: 12573036
      }
    },
    localhost: {
        url: "http://localhost:8545"
    }
  }
};

// npx hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/kixfCo4SQqpUcT81nno3AG6g_r1R2f77 --fork-block-number 12573036
