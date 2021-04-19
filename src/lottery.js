import web3 from './web3';

const adress = '0x8E18A5DF71ba06F984E1997f7C67244E9E15B73a';

const abi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [],
    "name": "enter",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "getPlayers",
    "outputs": [{
        "internalType": "address payable[]",
        "name": "",
        "type": "address[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "manager",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pickWinner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "players",
    "outputs": [{
        "internalType": "address payable",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}];

export default new web3.eth.Contract(abi, adress);