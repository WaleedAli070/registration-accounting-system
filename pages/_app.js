import '../styles/globals.css'
import "../styles/antd.less";
import AppLayout from '../layouts/AppLayout'

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
