# Contracts

All Solidity contracts live in this directory.

## Standards

- **OpenZeppelin Contracts** — Use for all standard implementations (ERC20, ERC721, AccessControl, ERC1155, proxies, etc.)
- **Never roll your own** — Battle-tested patterns from OZ are always preferred over custom implementations
- **Solidity version** — Use `^0.8.28`
- **NatSpec comments** — Required on all public functions

## Structure

```
contracts/
├── YourContract.sol    # Main contracts
├── base/              # Abstract contracts, interfaces
├── token/             # ERC20, ERC721, ERC1155
├── access/            # AccessControl, Ownable
└── utils/             # Common utilities
```

## Compilation

```bash
pnpm build
```

Output goes to `out/` directory. Artifacts are gitignored.

## Verification

After deployment to Base Sepolia:

```bash
npx hardhat verify <contractAddress> <constructorArgs...>
```

Example:
```bash
npx hardhat verify 0x... "constructor arg 1"
```

---

## Style Guide

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title MyContract
/// @notice Description of what this contract does
/// @author Team Name
contract MyContract {
    /// @inheritdoc IMyContract
    function myFunction() external pure returns (uint256) {
        return 42;
    }
}
```

- Use `external` for public functions when possible (better gas optimization)
- NatSpec on all public/external functions
- NatSpec on contract definition
- Events for state changes