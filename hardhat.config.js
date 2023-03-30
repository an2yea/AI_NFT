/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env" });
// console.log
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    hardhat: {
    },
    PolygonMumbai : {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}