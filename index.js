import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors";
import style from './stylesheets'

export default function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }

  }

  return (





    
    <div class='Header'>
      
      <button onClick={connect}>Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not Connected</span>}

    </div>
    
  )
}

