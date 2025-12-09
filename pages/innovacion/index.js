import Head from 'next/head'
import Header from '../../components/Header'

const projects = [
  {
    title: "Lorem ipsum dolor sit 1.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem, velit itaque placeat blanditiis sapiente."
  },
  {
    title: "Lorem ipsum dolor sit 2.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem, velit itaque placeat blanditiis sapiente."
  },
  {
    title: "Lorem ipsum dolor sit 3.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem, velit itaque placeat blanditiis sapiente."
  },
  {
    title: "Lorem ipsum dolor sit 4.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem, velit itaque placeat blanditiis sapiente."
  },
]

export default function InnovacionPage() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Innovación</title>
      </Head>

      <Header
        title="Innovación"
        subtitle=""
      />

      <div className="pages">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>Río Cuarto: Impulsor de la Transformación Digital</h2>
              <p className='lead'>La innovación es el motor que impulsa la gestión de la Secretaría de Economía e Innovación, buscando constantemente mejorar la eficiencia administrativa, la transparencia financiera y la calidad de los servicios que se ofrecen a los ciudadanos.</p>
              <p className='mb-5'>En Río Cuarto, nuestra estrategia se centra en la Transformación Digital para simplificar la interacción entre el vecino y el municipio. Esto se logra mediante la adopción de tecnologías que garantizan la agilidad, la accesibilidad y la modernización de los procesos internos.</p>
              <h2 className='mb-3'>Pilares</h2>
              <h3>Pilar 1: Digitalización y Eficiencia Económica</h3>
              <p>
                Nos enfocamos en la optimización de los recursos municipales a través de la digitalización de la administración económica. Nuestro objetivo es que la gestión de impuestos, tasas y servicios sea transparente, rápida y completamente online.
              </p>
              <ul className='mb-5'>
                <li>Trámites 100% Digitales: Facilitamos el pago y la gestión de obligaciones municipales a través de plataformas virtuales seguras y accesibles.</li>
                <li>Transparencia Financiera: Uso de software de gestión avanzada para garantizar la trazabilidad y la publicación activa del uso de los fondos públicos.</li>
                <li>Optimización de Recursos: Aplicación de Big Data y análisis de información para una planificación económica y presupuestaria más precisa.</li>
              </ul>
              <h3>Pilar 2:</h3>
              <p className='mb-5'><i>A desarrollar</i></p>
              <h3>Pilar 3:</h3>
              <p className='mb-5'><i>A desarrollar</i></p>
            </div>
            <div className="col-md-5">
              <h2 className='text-primary mb-3'>Proyectos Clave de Innovación</h2>
              {projects.map((project, index) => (
                <div className="card mb-3" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href="#">Ver más</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
