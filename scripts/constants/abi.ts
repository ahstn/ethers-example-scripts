import { ContractInterface } from "ethers";

export const PAIR_PARTIAL_ABI: ContractInterface = [
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
        ],
        "name": "balanceOf",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "price0CumulativeLast",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "price1CumulativeLast",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token0",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token1",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
]

export const MASTERCHEF_PARTIAL_ABI: ContractInterface = [
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "name": "poolInfo",
        "outputs": [
        {
            "internalType": "contract IERC20",
            "name": "lpToken",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "accJoePerShare",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "lastRewardTimestamp",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "allocPoint",
            "type": "uint256"
        },
        {
            "internalType": "contract IRewarder",
            "name": "rewarder",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "poolLength",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "pools",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
  