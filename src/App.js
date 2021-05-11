import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import Token from './artifacts/contracts/Token.sol/Token.json'
import MyNft from './artifacts/contracts/nft.sol/MyNft.json'

//Greeter deployed to: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
//Token deployed to: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9

//   Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
//   MyNft deployed to: 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853

const myNftAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
//0x5FbDB2315678afecb367f032d93F642f64180aa3
function App() {
  const [greeting, setGreetingValue] = useState()
  const [userAccount, setUserAccount] = useState()
  const [nftTargetAccount, setNftTargetAccount] = useState()
  const [amount, setAmount] = useState()

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // async function fetchGreeting() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     console.log({ provider })
  //     const contract = new ethers.Contract(mynftAddress, Greeter.abi, provider)
  //     try {
  //       const data = await contract.greet()
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log("Error: ", err)
  //     }
  //   }
  // }
  //
  // async function getBalance() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
  //     const balance = await contract.balanceOf(account);
  //     console.log("Balance: ", balance.toString());
  //   }
  // }
  //
  // async function setGreeting() {
  //   if (!greeting) return
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     console.log({ provider })
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(mynftAddress, Greeter.abi, signer)
  //     const transaction = await contract.setGreeting(greeting)
  //     await transaction.wait()
  //     fetchGreeting()
  //   }
  // }
  //
  // async function sendCoins() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
  //     const transation = await contract.transfer(userAccount, amount);
  //     await transation.wait();
  //     console.log(`${amount} Coins successfully sent to ${userAccount}`);
  //   }
  // }

  async function awardNft() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(myNftAddress, MyNft.abi, signer);
      const transation = await contract.awardItem(nftTargetAccount, "mytoken.uri");
      await transation.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <br />

        <button onClick={awardNft}>Award Nft</button>
        <input onChange={e => setNftTargetAccount(e.target.value)} placeholder="Account ID" />
      </header>
    </div>
  );
}

export default App;




// import './App.css';
// import { useState } from 'react';
// import { ethers } from 'ethers'
// import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
//
// // Update with the contract address logged out to the CLI when it was deployed
// //const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
// const greeterAddress = "0xD5b480eAC3e91A1167443662D2f12Ca64F4cC7D5"
// function App() {
//   // store greeting in local state
//   const [greeting, setGreetingValue] = useState()
//
//   // request access to the user's MetaMask account
//   async function requestAccount() {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//   }
//
//   // call the smart contract, read the current greeting value
//   async function fetchGreeting() {
//     if (typeof window.ethereum !== 'undefined') {
//       const provider = new ethers.providers.Web3Provider(window.ethereum)
//       const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
//       try {
//         const data = await contract.greet()
//         console.log('data: ', data)
//       } catch (err) {
//         console.log("Error: ", err)
//       }
//     }
//   }
//
//   // call the smart contract, send an update
//   async function setGreeting() {
//     if (!greeting) return
//     if (typeof window.ethereum !== 'undefined') {
//       await requestAccount()
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner()
//       const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
//       const transaction = await contract.setGreeting(greeting)
//       await transaction.wait()
//       fetchGreeting()
//     }
//   }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={fetchGreeting}>Fetch Greeting</button>
//         <button onClick={setGreeting}>Set Greeting</button>
//         <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
//       </header>
//     </div>
//   );
// }
//
// export default App;
