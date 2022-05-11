import Head from "next/head";
import Header from "../components/Header";

export default function Ods() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Ods</title>
      </Head>

      <Header title="Ods" subtitle="Objetivos de Desarrollo Sostenible" />
      <div className="pages">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src="./images/ods-logo.png"
                alt=""
                width={500}
                className="img-fluid mb-3"
              />
              <h2>
                Río Cuarto adhirió a los Objetivos de Desarrollo Sostenible
              </h2>
              <p className="lead">
                El Concejo Deliberante de Río Cuarto aprobó la adhesión a los
                Objetivos para el Desarrollo Sostenible que componen la Agenda
                2030, adoptados por los estados miembros de la Organización de
                las Naciones Unidas (ONU) en la Cumbre Mundial realizada en el
                año 2015.
              </p>
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
              <p>
                En esta línea que cada uno de los programas que se están
                ejecutando desde las diversas áreas que conforman el municipio
                ya están vinculados con el ODS que corresponda. De esta manera
                las acciones se ejecutan para consolidar el marco de metas para
                los 17 ODS e indicadores de seguimiento que permite que la Río
                Cuarto pueda dar cuenta en el nivel local y regional de los
                avances en la implementación de la Agenda 2030.
              </p>
              <h4 className="mt-5 mb-3">
                Presupuesto 2022 - Alineación a los ODS
              </h4>
              <a
                href="https://drive.google.com/file/d/1-kxdS0qgjEc_8AOyEZUT4MNzmd8vAdB0/view?usp=sharing"
                className="btn btn-primary text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ord.148-E.29246 - Adhesión ODS
              </a>
              <a
                href="https://drive.google.com/file/d/1-hcn2itm2OKLy8nc2i9uJkHKM5Mzh6VK/view?usp=sharing"
                className="btn btn-primary text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Presupuesto 2022 - Alineación a los ODS
              </a>
              <h4 className="mt-5 mb-3">ODS: ¿Qué son y cómo conseguirlos?</h4>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/MCKH5xk8X-g?rel=0"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
