import Head from 'next/head'
import Header from '../components/Header'
import UnsubscribeForm from '../components/UnsuscribedForm'

export default function Desuscripcion() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Estadísticas</title>
      </Head>
      <Header title='Desuscripcion' subtitle='' />
      <div className="pages">
        <div className="container">
          <UnsubscribeForm />
        </div>
      </div>
    </>
  )
}
