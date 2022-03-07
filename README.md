# Smart Contract

This is Boilerplate for Developing Smart Contract in any ethereum-based network. This project is using `yarn` as package manager.

## What this project uses

* [Truffle V5](https://trufflesuite.com/)
* [Ethlint](https://ethlint.readthedocs.io/en/latest/)
* [Openzeppelin Contract](https://openzeppelin.com/contracts/)
* [Ethers](https://docs.ethers.io/v5/)
* [Prettier](https://prettier.io/)

## Instalation

1. Initialize package using
    ```
    yarn install
    ```

2. Create `.env` file in the root directory to set environment variable. See `.env.example` file for example value of the file.

    * `DEVELOPMENT_MNEMONIC`, can be mnemonic phrase or private key of account who will deploy the smart contract in development network.
    * `DEVELOPMENT_ENDPOINT`, the json-rpc endpoint of development network in format `<protocol>://<host>:<port>`.
    * `TEST_MNEMONIC`, can be mnemonic phrase or private key of account who will deploy the smart contract in test network.
    * `TEST_ENDPOINT`, the json-rpc endpoint of test network in format `<protocol>://<host>:<port>`.
    * `TESTNET_MNEMONIC`, can be mnemonic phrase or private key of account who will deploy the smart contract in testnet network.
    * `INFURA_ID`, id from your infura account to access testnet network.

## Building

To build the smart contract, use this:
```
yarn build
```

## Deployment

To deploy the smart contract to development network, use this:
```
yarn deploy
```

If you want to deploy to another network, use this:
```
yarn deploy:<network_name>
```

For example, to deploy in Mumbai Testnet Network, use
```
yarn deploy:mumbai
```

## Testing

To do testing based on [Mocha](https://mochajs.org/), use this:
```
yarn test

# use this if you want to show reported gas used
yarn test:gas-reporter
```

## Console

To access console connected to development network, use this:
```
yarn console
```

If you want to access console connected to another network, use this:
```
yarn console:<network_name>
```

For example, to access console connected to in Mumbai Testnet Network, use
```
yarn console:mumbai
```

To create local network and access the console, use this:
```
yarn develop
```

## Lint

To check for problem from smart contract, use this:
```
yarn lint:contracts

# use this to overwrite smart contract with fixes
yarn lint:contracts-write
```

To lint javascript script, use this:
```
yarn lint:js

# use this to overwrite js script with fixes
yarn lint:js-write
```

To check for problem from smart contract and overwrite js script with fixes, use this:
```
yarn lint
```