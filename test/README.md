# Tests

All tests are written in **Solidity** using Foundry's `forge test`.

## Structure

```
test/
├── YourContract.t.sol   # Contract tests
├── unit/                # Unit tests per contract
├── integration/         # Cross-contract tests
└── invariant/          # Invariant/fuzzing tests
```

## Running Tests

```bash
# Standard run
forge test

# Verbose output
forge test -vvv

# Very verbose (show logs)
forge test -vvvv

# Fuzzing (default: 10k runs)
forge test --fuzz-runs 10000

# Invariant testing
forge test --invariant

# Gas snapshot
forge snapshot
```

## Test Pattern

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import { MyContract } from '../contracts/MyContract.sol';
import { Test } from 'forge-std/Test.sol';

contract MyContractTest is Test {
    MyContract public myContract;

    function setUp() external {
        myContract = new MyContract();
    }

    function test_Something() external {
        // Arrange
        uint256 expected = 42;

        // Act
        myContract.doSomething(expected);

        // Assert
        assertEq(myContract.value(), expected);
    }

    function test_FuzzSomething(uint256 randomValue) external {
        myContract.doSomething(randomValue);
        assertEq(myContract.value(), randomValue);
    }
}
```

## Gas Regression

```bash
# Generate snapshot
forge snapshot

# Check for regressions (in CI)
forge snapshot --check
```

Commit `.gas-snapshot` to track gas costs. CI fails if regressions detected.

## Cheatcodes

Common `vm.` cheatcodes:

| Cheatcode | Usage |
|-----------|-------|
| `vm.prank(addr)` | Set `msg.sender` |
| `vm.deal(addr, amount)` | Give ETH to address |
| `vm.expectRevert()` | Expect revert |
| `vm.expectEmit()` | Expect event emission |
| `vm.prank` + `vm.startPrank` | Persistent prank |
| `vm.warp(block.timestamp + 1)` | Time manipulation |

See [forge-std](https://book.getfoundry.sh/reference/forge-std/) for full list.