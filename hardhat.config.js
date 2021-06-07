require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

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
