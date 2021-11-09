import { 
  BigNumber,
  Contract,
  ContractInterface,
  ethers,
  providers,
  utils,
} from "ethers"

const AVAX_MAINNET_RPC: string = 'https://api.avax.network/ext/bc/C/rpc'
const JOE_ADDRESS: string = '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd'
const SPELL_ADDRESS: string = '0xCE1bFFBD5374Dac86a2893119683F4911a2F7814'

const ERC20_PARTIAL_ABI: ContractInterface = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  }
]

const main = async(): Promise<any> => {
  const address: string = process.env.WALLET_ADDRESS
  const provider: providers.JsonRpcProvider = new providers.JsonRpcProvider(AVAX_MAINNET_RPC)
  const num: number = await provider.getBlockNumber()
  console.log(`Current Block Number: ${num}`)

  let balance: BigNumber = await provider.getBalance(address)
  console.log(`$AVAX Balance: ${utils.formatEther(balance)} AVAX`)

  const joeContract: Contract = new ethers.Contract(JOE_ADDRESS, ERC20_PARTIAL_ABI, provider);
  balance = await joeContract.balanceOf(address)
  console.log(`$JOE Balance: ${utils.formatEther(balance)} JOE`)

  const spellContract: Contract = new ethers.Contract(SPELL_ADDRESS, ERC20_PARTIAL_ABI, provider);
  balance = await spellContract.balanceOf(address)
  console.log(`$SPELL Balance: ${utils.formatEther(balance)} SPELL`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})