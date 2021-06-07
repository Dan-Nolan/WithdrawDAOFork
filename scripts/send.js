const { assert } = require("chai");
const { formatEther } = ethers.utils;

const withdrawAddr = "0xbf4ed7b27f1d666546e30d74d50d173d20bca754";
const person = "0xbe53b198b12f7f22de9e0dbf10cf7715640e3b78";
const theDAOaddr = "0xbb9bc244d798123fde783fcc1c72d3bb8c189413";

async function send() {
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [person]
  });

  const signer = await ethers.provider.getSigner(person);
  const theDAO = await ethers.getContractAt("IERC20", theDAOaddr, signer);

  await theDAO.transfer("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", ethers.utils.parseEther("0.7"));
}

send();
