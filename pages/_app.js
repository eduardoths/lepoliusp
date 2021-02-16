import '../styles/style.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Liga de Empreendedorismo da Poli</title>
        <link rel="shortcut icon" href="/img/icon_liga.png" />
      </Head>
      <Header />
      <div className="corpo">
      <Component {...pageProps}/>
      </div>
      <Footer />
    </>
  )
}