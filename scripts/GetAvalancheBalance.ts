import { 
  BigNumber,
  providers,
  utils,
} from "ethers"

const AVAX_MAINNET_RPC: string = 'https://api.avax.network/ext/bc/C/rpc'

const main = async(): Promise<any> => {
  const address: string = process.env.WALLET_ADDRESS
  const provider: providers.JsonRpcProvider = new providers.JsonRpcProvider(AVAX_MAINNET_RPC)
  const num: number = await provider.getBlockNumber()
  console.log(`Current Block Number: ${num}`)

  const balance: BigNumber = await provider.getBalance(address)
  const formatted: string = utils.formatEther(balance)
  console.log(`Current Balance: ${formatted} AVAX`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})