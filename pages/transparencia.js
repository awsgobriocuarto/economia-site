import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import getListEstatistics from '../services/getListEstatistics'
import DownloadItem from '../components/DownloadItem'

export default function Estadisticas({
  ejercicios,
  ejecuciones,
  presupuesto,
  recaudacion,
  informes,
  deudas,
  realidad
}) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Estadísticas</title>
      </Head>

      <Header title='Transparencia' subtitle='' />
      <section className='legislations'>
        <div className='container'>
          {ejercicios.length ? (
            <div className='group'>
              <div className='current'>
                <h3>Cuenta general del ejercicio</h3>
                <ul>
                  {ejercicios.map((item) => (
                    <DownloadItem
                      key={item.id}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {ejecuciones.length ? (
            <div className='group'>
              <div className='current'>
                <h3>Ejecución Presupuestaria</h3>
                <ul>
                  {ejecuciones.map((item) => (
                    <DownloadItem
                      key={item.id}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {presupuesto.length ? (
            <div className='group'>
              <div className='current'>
                <h3>Presupuesto</h3>
                <ul>
                  {presupuesto.map((item) => (
                    <DownloadItem
                      key={item.id}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {recaudacion.length ? (
            <div className='group'>
              <div className='current'>
                <h3>Recaudación</h3>
                <ul>
                  {recaudacion.map((item) => (
                    <DownloadItem
                      key={item.id}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {deudas.length ? (
            <div className='group'>
              <div className='current'>
                <h3>Reporte de Deuda Municipal</h3>
                <ul>
                  {deudas.map((item) => (
                    <DownloadItem
                      key={item.id}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {informes.length ? (
            <div className='group'>
              <div className='current'>
                <h3>Informe Calificación de Riego</h3>
                <ul>
                  {informes.map((item) => (
                    <DownloadItem
                      key={item.id}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {realidad.length ? (
            <div className='group'>
              <div className='current'>
                <h3>Informe de Actividad Económica</h3>
                <ul>
                  {realidad.map((item) => (
                    <DownloadItem
                      key={item.id}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className='group'>
            <h3>Informes Anteriores</h3>
            <a
              href='http://transparencia.riocuarto.gov.ar/'
              target='_blank'
              className='btn btn-secondary'
            >
              Consultar
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const response = await getListEstatistics.list()
  const items = response

  const ejercicios = response.filter((i) =>
    i.category.toLowerCase().includes('ejercicio')
  )
  const ejecuciones = response.filter((i) =>
    i.category.toLowerCase().includes('ejecucion')
  )
  const presupuesto = response.filter((i) =>
    i.category.toLowerCase().includes('presupuesto')
  )
  const recaudacion = response.filter((i) =>
    i.category.toLowerCase().includes('recaudacion')
  )
  const informes = response.filter((i) =>
    i.category.toLowerCase().includes('informes')
  )
  const deudas = response.filter((i) =>
    i.category.toLowerCase().includes('deudas')
  )
  const realidad = response.filter((i) =>
    i.category.toLowerCase().includes('realidad')
  )
  return {
    props: {
      items,
      ejercicios,
      ejecuciones,
      presupuesto,
      recaudacion,
      informes,
      deudas,
      realidad
    },
    revalidate: 1
  }
}
