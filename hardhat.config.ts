import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-verify';
import 'dotenv/config';

const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || '';
const BASESEPOLIA_RPC = process.env.BASESEPOLIA_RPC || 'https://sepolia.base.org';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';
const BASESCAN_API_KEY = process.env.BASESCAN_API_KEY || '';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.28',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: 'contracts',
    out: 'out',
    cache: 'cache_hardhat',
  },
  networks: {
    hardhat: {
      chainId: 84532,
    },
    baseSepolia: {
      url: BASESEPOLIA_RPC,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 84532,
    },
  },
  verify: {
    etherscan: {
      apiKey: {
        baseSepolia: BASESCAN_API_KEY,
        mainnet: ETHERSCAN_API_KEY,
      },
    },
  },
};

export default config;