import { Html, Head, Main, NextScript } from 'next/document'
import Menu from '../components/Menu'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-light'>
        <Menu />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}