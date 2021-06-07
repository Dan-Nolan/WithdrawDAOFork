const { assert } = require("chai");
const { formatEther } = ethers.utils;

const withdrawAddr = "0xbf4ed7b27f1d666546e30d74d50d173d20bca754";
const person = "0xbe53b198b12f7f22de9e0dbf10cf7715640e3b78";
const theDAOaddr = "0xbb9bc244d798123fde783fcc1c72d3bb8c189413";

describe("WithdrawDAO", function() {
  it("should allow us to withdraw", async function() {
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [person]
    });

    const signer = await ethers.provider.getSigner(person);
    const theDAO = await ethers.getContractAt("IERC20", theDAOaddr, signer);

    const beforeBalance = await theDAO.balanceOf(person);

    console.log("before", formatEther(beforeBalance));
    console.log("before ether", formatEther(await ethers.provider.getBalance(person)));

    const withdrawDAO = await ethers.getContractAt("IWithdrawDAO", withdrawAddr, signer);
    await theDAO.approve(withdrawDAO.address, ethers.constants.MaxUint256);
    await withdrawDAO.withdraw();

    const afterBalance = await theDAO.balanceOf(person);

    console.log("after", formatEther(afterBalance));
    console.log("after ether", formatEther(await ethers.provider.getBalance(person)));
  });
});
