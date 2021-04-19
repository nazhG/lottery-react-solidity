import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
// const web3 = new Web3(window.web3.currentProvider);

// (async () => {
//     try {
//       await window.ethereum.request({
//         method: 'eth_requestAccounts',
//       });
//     } catch (error) {
//       console.log(error);
//     }
// })();

export default web3;