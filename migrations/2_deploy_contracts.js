var Voting = artifacts.require("./Voting.sol");
//tell the truffle which contracts we'd like to interact with artifacts.require()
//The name specified should match the name of the contract definition within that source file
module.exports = function (deployer) {
  deployer.deploy(
    Voting,
    ["Ram", "Andrew", "Jose"].map((name) => web3.utils.asciiToHex(name))
  );
};
/* As you can see above, the deployer expects the first argument to   be the name of the contract followed by constructor arguments. In our case, there is only one argument which is an array of
candidates. The third argument is a hash where we specify the gas required to deploy our code. The gas amount varies depending on the size of your contract.
*/
