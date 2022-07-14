const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSSWER,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSSWER],
        })
        log("Mocks deployed")
        log("--------------------------------------------")
    }
    //well what happens when we want to change chains?
    //when going for localhost or hardhat network we want to use a mock
}

module.exports.tags = ["all", "mocks"]
