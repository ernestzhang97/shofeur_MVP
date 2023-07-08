import { AppProps } from 'next/app'
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <div id="modal-root"></div>
      <Component {...pageProps} />
    </div>
  )
}