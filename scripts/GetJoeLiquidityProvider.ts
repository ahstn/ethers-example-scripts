import { 
  Contract,
  ethers,
  providers,
  utils,
} from "ethers"

import { MASTERCHEF_PARTIAL_ABI, PAIR_PARTIAL_ABI } from "./constants/abi"
import { TOKENS } from "./constants/tokens"

const AVAX_MAINNET_RPC: string = 'https://api.avax.network/ext/bc/C/rpc'
const JOE_MASTERCHEF_CONTRACT: string = '0xd6a4f121ca35509af06a0be99093d08462f53052'
const JOE_POOL_ID = '0' // Set this to Pool ID, or loop to <= poolInfo.poolLength

type PoolInfo = {
  lpToken: string
  allocPoint: bigint
  lastRewardTimestamp: bigint
  accJoePerShare: bigint
  rewarder: string
}

const main = async(): Promise<any> => {
  const address: string = process.env.WALLET_ADDRESS
  const provider: providers.JsonRpcProvider = new providers.JsonRpcProvider(AVAX_MAINNET_RPC)

  const chefContract: Contract = new ethers.Contract(JOE_MASTERCHEF_CONTRACT, MASTERCHEF_PARTIAL_ABI, provider)
  const poolInfo: PoolInfo = await chefContract.poolInfo(JOE_POOL_ID)
  console.log(`Trader Joe Pool LP Token ${poolInfo.lpToken}`)

  const lpContract: Contract = new ethers.Contract(poolInfo.lpToken, PAIR_PARTIAL_ABI, provider)
  const primary: string = await lpContract.token0()
  const secondary: string = await lpContract.token1()

  // NB: For real world use, a different data structure might make more sense.
  let a: string, b : string
  TOKENS.forEach((address, symbol) => {
      if (primary == address) {
        a = symbol
      }
      if (secondary == address) {
        b = symbol
      }
    }
  )

  const balance = await lpContract.balanceOf(address)
  const symbol: string = await lpContract.symbol()
  console.log(`LP Balance: ${utils.formatEther(balance)} ${symbol}`)
  console.log(`Tokens: ${a} ${primary} / ${b} ${secondary}`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})