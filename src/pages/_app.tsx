import type { AppProps } from 'next/app'
import { globalStyles } from 'src/styles/global'

// Called here 'cause is called once time
globalStyles()

export default function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
