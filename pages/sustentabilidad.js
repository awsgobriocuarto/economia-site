import Head from 'next/head'
import Header from '../components/Header'

export default function Sustentabilidad() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Sutentabilidad</title>
      </Head>

      <Header title='Sustentabilidad' subtitle='Río Cuarto hacia un Modelo Sustentable' />
      <div className='pages'>
        <div className='container'>
          <div className='row gx-5 justify-content-between'>
            <div className='col-md-6'>

              <h2>
                Río Cuarto adhirió a los Objetivos de Desarrollo Sostenible
              </h2>
              <p className='lead'>
                El Concejo Deliberante de Río Cuarto aprobó la adhesión a los
                Objetivos para el Desarrollo Sostenible que componen la Agenda
                2030, adoptados por los estados miembros de la Organización de
                las Naciones Unidas (ONU) en la Cumbre Mundial realizada en el
                año 2015.
              </p>
              <img
                src='./images/ods-logo.png'
                alt=''
                width={300}
                className='img-fluid mb-3'
              />
              <p>
                Acompañamos el cumplimiento de la agenda 2030 que definió la
                ONU, y en este sentido, Río Cuarto adecua su política de
                ejecución presupuestaria a los lineamientos que establece la
                ONU.
              </p>
              <p>
                Los <b>Objetivos de Desarrollo Sostenible</b> conforman una
                agenda común de promoción del desarrollo sostenible, apoyada en
                el convencimiento de que las iniciativas para acabar con la
                pobreza deben ir de la mano de estrategias que favorezcan el
                crecimiento económico y abordan una serie de necesidades
                sociales, como la educación, la salud, la protección social y
                las oportunidades de empleo, al tiempo que luchan contra el
                cambio climático y fortalecen las políticas de protección del
                ambiente.
              </p>
              <p className='mb-4'>
                En esta línea que cada uno de los programas que se están
                ejecutando desde las diversas áreas que conforman el municipio
                ya están vinculados con el ODS que corresponda. De esta manera
                las acciones se ejecutan para consolidar el marco de metas para
                los 17 ODS e indicadores de seguimiento que permite que la
                ciudad de Río Cuarto pueda dar cuenta en el nivel local y
                regional de los avances en la implementación de la Agenda 2030.
              </p>
              <a
                href='https://drive.google.com/file/d/1-kxdS0qgjEc_8AOyEZUT4MNzmd8vAdB0/view?usp=sharing'
                className='btn btn-primary text-white me-3 mb-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ord.148-E.29246 - Adhesión ODS
              </a>
              <a
                href='https://drive.google.com/file/d/10DYdxwLWoIM53Bc52hp30oUXuUJ6uRP7/view?usp=sharing'
                className='btn btn-primary text-white me-3 mb-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                Agenda 2030 y ODS
              </a>
              <h4 className='mt-5 mb-3'>
                Presupuestos alineados a los ODS de la Agenda
              </h4>

              <h5 className='mt-4'>Informes de Alineación a los ODS</h5>
              <a
                href='https://drive.google.com/file/d/1jGDaaNM2Gd8JrWtQFO8xDoBbCxIXlO0f/view?usp=share_link'
                className='btn btn-primary text-white me-3 mb-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                Informe de Alineación 2023
              </a>
              <a
                href='https://drive.google.com/file/d/1-hcn2itm2OKLy8nc2i9uJkHKM5Mzh6VK/view?usp=share_link'
                className='btn btn-primary text-white me-3 mb-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                Informe de Alineación 2022
              </a>

              <h5 className='mt-4'>Informes de Contribución a los ODS</h5>
              <a
                href='https://drive.google.com/file/d/1TMZWcLx8lYicmAEKe0i2HzkXicAALpID/view'
                className='btn btn-primary text-white me-3 mb-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                Informe de Contribución 2022
              </a>

              <div>
                <h5 className='mt-4 mb-2'>Accedé al Portal de ODS</h5>
                <a
                  href='https://odsriocuarto.gob.ar/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='./images/portal-ods.jpg'
                    alt=''
                    width={240}
                    className='img-fluid'
                  />
                </a>
              </div>
              <h4 className='mt-5 mb-3'>ODS: ¿Qué son y cómo conseguirlos?</h4>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/MCKH5xk8X-g?rel=0'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className='col-md-6'>
              <h2>
                Río Cuarto hacia un modelo sustentable
              </h2>
              <p className='lead'>La Municipalidad de Río Cuarto presentó su primer Reporte de Sustentabilidad, que abarca las iniciativas emprendidas por el gobierno local en el período comprendido entre el 1 de enero de 2022 y el 31 de diciembre de 2022.</p>
              <p>Este informe representa un hito importante en el camino de nuestra ciudad hacia un modelo más sustentable y resalta el compromiso del municipio con el desarrollo sostenible en todas las áreas de gobierno.</p>
              <p>El Reporte de Sustentabilidad de la Municipalidad de Río Cuarto es un documento integral que proporciona una visión transparente y detallada de las acciones y logros alcanzados en materia de sustentabilidad durante el último año. Este informe refleja el compromiso de mantener una gestión responsable y equilibrada, teniendo en cuenta los aspectos económicos, sociales y ambientales que impactan en nuestra comunidad.</p>
              <p>Fue elaborado a través del lente de indicadores reconocidos a nivel internacional como lo son los Estándares GRI. Además, en el documento se detalla la contribución del municipio al logro de los Objetivos de Desarrollo Sostenible así como el aporte a los 10 Principios del Pacto Global de Naciones Unidas que giran en torno a los derechos humanos, las normas laborales, el medioambiente y la anticorrupción.</p>

              <p><a className='btn btn-secondary' target='_blank' rel='noopener noreferrer' href="https://unglobalcompact.org/what-is-gc/participants/152105-Municipalidad-de-R-o-Cuarto">VER REPORTE</a></p>

              <p>A lo largo de las páginas del reporte, se podrá conocer la importancia que el desarrollo sostenible representa para la agenda de gobierno municipal. Asimismo, podrán interiorizarse en las acciones desarrolladas y los resultados obtenidos en el marco de los ejes estratégicos del municipio: participación ciudadana; transparencia, calidad e innovación; desarrollo local sostenible; y justicia social.</p>
              <p>El reporte de sustentabilidad completo se encuentra disponible en el siguiente enlace</p>

              <p><a className='btn btn-secondary' target='_blank' rel='noopener noreferrer' href="https://drive.google.com/file/d/1zKIetYcmYuSkLq287pHbq73jvaPi83qr/view?usp=sharing">VER REPORTE</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
