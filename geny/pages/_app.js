import '@/styles/globals.css'
import GlobalState from '@/contexts/GlobalState'
export default function App({ Component, pageProps }) {
  return(
    <GlobalState>
  <Component {...pageProps} />
  </GlobalState>
    ) 
}
