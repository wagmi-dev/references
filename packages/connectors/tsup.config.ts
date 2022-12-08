import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'

export default defineConfig(
  getConfig({
    dev: process.env.DEV === 'true',
    entry: [
      'src/index.ts',
      'src/injected.ts',
      'src/coinbaseWallet.ts',
      'src/metaMask.ts',
      'src/mock/index.ts',
      'src/walletConnect.ts',
      'src/ledger.ts',
    ],
    platform: 'browser',
  }),
)
