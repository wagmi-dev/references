import { Chain } from './types'

export const metisGoerli: Chain = {
  id: 599,
  name: 'Metis Goerli',
  network: 'metis-goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'Metis Goerli',
    symbol: 'METIS',
  },
  rpcUrls: {
    default: { http: ['https://goerli.gateway.metisdevops.link'] },
  },
  blockExplorers: {
    default: {
      name: 'Metis Goerli Explorer',
      url: 'https://goerli.explorer.metisdevops.link',
    },
  },
}