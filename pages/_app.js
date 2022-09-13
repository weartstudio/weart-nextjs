import '../styles/index.scss'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-light min-vh-100'>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
