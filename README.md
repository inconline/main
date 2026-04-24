# inc online

[![Status](https://img.shields.io/badge/status-under%20development-orange)](https://github.com/inconline)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?logo=discord&logoColor=white)](https://discord.gg/NjWtpF7qHu)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Open source, modular, lego-like entities onchain.**

Smart contract structure for fully onchain entities to manage funds, roles and permissions.

---

## What

**inc online** is an open source, modular framework for creating and managing onchain entities, think of it as a lego-like building system for online companies and organizations that live entirely on-chain, with flexible permission rules, fund management, and role structures built in.

## Why

A paradigm shift is underway in how we make and receive payments. In the coming years, onchain payments will account for a greater share of everyday transactions across personal finance, banking, and enterprise than traditional rails, banks, and card networks combined.

As that shift happens, we need reliable onchain infrastructure to create and run online entities: structures with configurable rules, flexible permission systems, and the ability to support both human and machine participants working together.

The current solutions fall short. Existing DAO tooling doesn't meet the needs of most organizations. Many available frameworks still require running things like a traditional company with heavy manual overhead, leading to centralization risk and, ironically, more friction than simply staying with a traditional company structure.

## How

Through experimentation. We know the goal: a lego-like interface for building and managing an onchain entity, one where you don't need to write a single line of code, and don't need to rely on AI-generated workarounds or unsafe shortcuts.

We're building a **no-code, safe, modular onchain company builder**.

Want to go deeper? [Let's chat on Discord →](https://discord.gg/NjWtpF7qHu)

---

## Development Stack

| Tool | Purpose |
|------|---------|
| [Foundry](https://book.getfoundry.sh/) | Fast smart contract testing, fuzzing, deployment scripts |
| [Hardhat](https://hardhat.org/) | Deployment pipelines, verification, TypeScript tooling |
| [Viem](https://viem.sh/) | Type-safe contract interactions |
| [OpenZeppelin](https://openzeppelin.com/contracts/) | Battle-tested standards (ERC20, ERC721, AccessControl) |

**Network:** Base Sepolia (Chain ID: 84532)

### Quick Start

```bash
# Install dependencies
pnpm install

# Build contracts
pnpm build

# Run tests
pnpm test

# Gas snapshot
pnpm snapshot
```

### Directory Structure

```
├── contracts/          # Solidity source (.sol)
├── test/              # Foundry tests (.sol)
├── script/            # Foundry deployment scripts (.sol)
├── src/               # TypeScript/Viem scripts
├── lib/               # Git-submodule libraries (forge-std)
├── out/               # Compiled output (gitignored)
├── broadcast/         # Broadcast logs (gitignored)
└── node_modules/      # Dependencies (gitignored)
```

### Commands

```bash
pnpm test              # Run all tests
pnpm test:verbose      # Verbose output (-vvv)
pnpm test:fuzz         # Fuzz testing (10k runs)
pnpm build             # Compile contracts (forge build)
pnpm clean             # Clear build artifacts
pnpm snapshot          # Generate gas snapshot
pnpm snapshot:check    # Check for regressions
pnpm deploy:ignition   # Deploy via Hardhat Ignition
pnpm verify            # Verify on explorer
pnpm node              # Start local Hardhat node
```

### Environment Setup

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:
- `DEPLOYER_PRIVATE_KEY` — Deployer wallet private key
- `BASESCAN_API_KEY` — For contract verification on Basescan

### Security

Run static analysis before committing:

```bash
pnpm lint
```

---

## Contributors

*To be updated.*

---

<sub>inc online is open source. Contributions welcome.</sub>