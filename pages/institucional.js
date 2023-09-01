import Head from "next/head";
import Header from "../components/Header";
import InstitutionalCard from "../components/InstitutionalCard";

const officials = [
  {
    id: 1,
    name: "Cr. Pablo Antonetti",
    position: "Secretario de Economía",
    cv: "https://drive.google.com/file/d/1VtYolOt-3tqx-ws36C5ndyDKUqoKm59c/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1666284223/Economia/Web/institucional-pablo-antonetti_vaw8r8.png",
  },
  {
    id: 2,
    name: "Cra. Irina M. Terzaghi",
    position: "Subsecretaría de Hacienda",
    cv: "https://drive.google.com/file/d/1hqVuH3-7ACzxwH21geYGJgIIETNjTQZM/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1666284223/Economia/Web/institucional-irina-therzagui_yxure1.png",
  },
];
const persons = [
  {
    id: 1,
    name: "Lic. Miguel Carranza",
    position: "Dirección Gral. de Administración",
    cv: "https://drive.google.com/file/d/1ZwAsgT-y0eq9yoZV9DQKKLzw6kIryGdq/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1666284223/Economia/Web/institucional-miguel-carranza_bgduhj.png",
  },
  {
    id: 2,
    name: "Cr. Federico Scheurer",
    position: "Dirección Gral. de Recursos",
    cv: "https://drive.google.com/file/d/1eUs1nfLDcj3PKjZUAPSXqcYDfO3L9-UK/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1666284223/Economia/Web/institucional-federico-scheurer_ppoeqh.png",
  },
  {
    id: 3,
    name: "Lic. Lorena Ricotto",
    position: "Dirección Gral. de Gestión Financiera",
    cv: "https://drive.google.com/file/d/1cNLiIA8fsoEL-K28cYPU8qqBg0TEs5E8/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1669128766/Economia/Web/institucional-lorena-ricotto_wcfllm.png",
  },
  {
    id: 4,
    name: "Cra. Mónica Anelo",
    position: "Dirección Gral. de Estadísticas, Control de Calidad y Procesos.",
    cv: "https://drive.google.com/file/d/1r9ema7ENPKJ-5BMdPyb3a1q-Omkf0-7Y/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1677165074/Economia/Web/monica-anelo_wr1nze.png",
  },
  {
    id: 5,
    name: "Cr. Hernán Avanzini",
    position: "Dirección de Gestión Tributaria",
    cv: "https://drive.google.com/file/d/1CVzqYkVte339wYYtHtMn5V_Dv1KPNke_/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1669128626/Economia/Web/institucional-hernan-avanzini_esn2h0.png",
  },
];

export default function Institucional() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Institucional</title>
      </Head>

      <Header title="Institucional" subtitle="" />
      <section className="institutional">
        <div className="container">
          <div className="row justify-content-betwenn">
            <div className="col-md-4 order-0 order-md-1">
              <h4 className="mb-3">Organigrama</h4>
              <div className="institutional__group">
                <div className="row justify-content-center">
                  {officials.map((official) => (
                    <div key={official.id} className="col-6">
                      <InstitutionalCard data={official} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="institutional__group">
                <div className="row justify-content-center">
                  {persons.map((person) => (
                    <div key={person.id} className="col-6">
                      <InstitutionalCard data={person} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-8 order-1 order-md-0">
              <h4>Competencias de la Secretaría de Economía</h4>
              <p>
                Compete a la Secretaría de Economía de la Municipalidad de Río
                Cuarto, según lo establece el artículo 7° de la Carta Orgánica
                Municipal:
              </p>
              <ol className="mb-5">
                <li>
                  Elaborar anualmente el Proyecto de Presupuesto de Gastos y
                  Recursos en función de los lineamientos generales que
                  establezca el Departamento Ejecutivo Municipal, así como la
                  Ordenanza Tarifaria Anual, para su posterior elevación al
                  Concejo De
                </li>
                <li>
                  Confeccionar anualmente la Cuenta General del Ejercicio
                  conteniendo el estado de la ejecución presupuestaria y el
                  estado de situación patrimonial del ejercici
                </li>
                <li>
                  Promover y generar una cultura estratégica tributaria
                  alineadas con los objetivos de la recaudación y los
                  lineamientos generales de la gestión
                </li>
                <li>
                  Señalar las normas administrativas, económicas y financieras
                  de la administración municipal y proponer las adecuaciones
                  correspondientes que emanan del pacto financiero y de las
                  disposiciones legales de la
                </li>
                <li>
                  Proponer, participar, coadyuvar en la elaboración de políticas
                  económicas que hagan al interés general de la
                </li>
                <li>
                  Coordinar la elaboración de propuestas y formular alternativas
                  para la fijación de políticas y medidas de carácter municipal
                  en el marco de la política económica p
                </li>
                <li>
                  Asistir al Intendente en la coordinación de políticas y
                  medidas con otros organismos referidos a la programación
                  económica de la Región, la Provincia y la Nación.
                </li>
              </ol>
              <h4 className="mb-3">
                Misiones y Funciones de cada Dirección General de la Secretaría
                de Economía
              </h4>
              <h5>Dirección General de Recursos</h5>
              <ol className="mb-3">
                <li>
                  Proponer el dictado de normas generales obligatorias para
                  reglamentar el cumplimiento de los deberes formales y el
                  dictado de resoluciones interpretativas de las normas
                  fiscales.
                </li>
                <li>
                  Ejercer una supervisión directa sobre todo el personal que
                  depende de la Dirección General de Recursos, en cuanto al
                  cumplimiento de sus funciones aplicando, cuando correspondiere
                  las sanciones previstas en el Estatuto del Empleado Municipal.
                </li>
                <li>
                  Aplicar las disposiciones contenidas en las Ordenanzas que
                  rigen la relación jurídica-tributaria y demás normas
                  obligatorias para la administración pública municipal.
                </li>
                <li> Establecer mecanismos de control de la recaudación.</li>
                <li>
                  Solicitar los informes de las inspecciones periódicas
                  realizadas por las distintas reparticiones involucradas en la
                  habilitación y control de los locales afectados al Comercio,
                  Industria, Empresas de Servicios y Diversiones y Espectáculos
                  Públicos.
                </li>
                <li>
                  Registrar requerimientos efectuados por niveles superiores,
                  procurando el cumplimiento de los plazos establecidos.
                </li>
                <li>
                  Controlar el cumplimiento de las órdenes de tareas por parte
                  de los distintos sectores que integran la Dirección y aspectos
                  formales de los comprobantes que deben ser conformados por la
                  Dirección General de Recursos.
                </li>
                <li>
                  Elaborar proyectos de informes de expedientes, disposiciones y
                  resoluciones de su competencia. Asimismo verificar y elaborar
                  informes de resultados cuantitativos y cualitativos de la
                  implementación de los distintos programas de recaudación.
                </li>
                <li>
                  Controlar el movimiento, registración, tramitación y archivo
                  de la documentación de la Dirección General de Recursos.
                </li>
                <li>
                  Coordinar y controlar el microemprendimiento de la
                  distribución de cedulones, notificaciones, relevamiento
                  inmobiliario y actualización de padrones.
                </li>
              </ol>
              <h5>Dirección General de Gestión Tributaria</h5>
              <ol className="mb-3">
                <li>
                  Coordinar y fortalecer los instrumentos y acciones tendientes
                  a optimizar los niveles de recaudación, generando una conducta
                  tributaria de cumplimiento voluntario, mediante el control de
                  la evasión y la gestión de cobro de las contribuciones
                  municipales.
                </li>
                <li>
                  Ejecutar procesos y medición de resultados, planes, programas
                  y proyectos del área de su competencia, elaborados conforme a
                  las directivas que imparta el DEM.
                </li>
                <li>
                  Emplear Herramientas de Gestión: Diagnóstico y análisis de
                  situación.
                </li>
                <li>
                  Promover la digitalización de trámites y procedimientos, tanto
                  internos como externos.
                </li>
                <li>
                  Detectar omisión y evasión de los tributos municipales
                  mediante distintos procedimientos. Fiscalizar el cumplimiento
                  de las obligaciones tributarias. Gestionar el cobro de los
                  tributos municipales.
                </li>
                <li>
                  Promover el inicio de los cobros judiciales mediante la
                  elevación de los Certificados de Deuda a la Fiscalía.
                </li>
              </ol>
              <h5>Dirección General Administrativa</h5>
              <ol className="mb-3">
                <li>
                  Asegurar la legalidad en el manejo de los fondos del
                  patrimonio público y garantizando la transparencia fiscal;
                </li>
                <li>
                  Procurar el correcto desarrollo de todas las tareas
                  administrativas relativas a la Ejecución del Presupuesto del
                  Gasto y el Cálculo de Recursos en sus aspectos económicos,
                  financieros y contables. Es el órgano de ejecución técnica en
                  materia de gastos dentro del Municipio y en los aspectos de
                  recaudación en lo que respecta a facilitar los medios de pago
                  a los contribuyentes.
                </li>
                <li>
                  Llevar a través de sus dependencias la Contabilidad
                  Presupuestaria y Patrimonial de la Administración Central del
                  Municipio y consolidada con el resto del Sector Público
                  Municipal, con arreglo a la Ordenanza de Administración
                  Financiera.
                </li>
                <li>
                  Ajustar todo el proceso Contable y los Sistemas de
                  Registración a las normas e instrucciones emanadas de la
                  Secretaría de Economía y la Subsecretaria de Hacienda.
                </li>
                <li>
                  Controlar la regularidad y exactitud de las operaciones
                  contables y sus registros. Participar en conjunto con la
                  Subdirección General de Presupuesto, en el dictado de
                  normativa sobre los procedimientos necesarios para la
                  formulación del anteproyecto de Presupuesto de cada año.
                </li>
                <li>
                  Producir informes técnicos solicitados en materia
                  presupuestaria y financiera.
                </li>
                <li>
                  Intervenir en las formalidades y procedimientos de los
                  convenios firmados con entidades bancarias, empresas dedicadas
                  al cobro de tributos, traslado de valores o dedicadas a medios
                  electrónicos de pago, tanto para los cobros como los pagos que
                  realice el Municipio.
                </li>
                <li>
                  Administrar los RRHH de la Dirección, controlarlos, supervisar
                  las comunicaciones internas de la misma en relación a las
                  faltas, sanciones y toda documentación emanada de la
                  Subsecretaría de RRHH.
                </li>
                <li>
                  Asistir en interpretación normativa y legal a las
                  reparticiones de su dependencia, en materia de contrataciones,
                  uso de clasificadores, registros presupuestarios y contables y
                  cancelación de acreencias y pasivos municipales.
                </li>
              </ol>
              <h5>Dirección General de Finanzas y Gestión</h5>
              <ol>
                <li>
                  Realizar el proceso de programación financiera municipal
                  planteando distintos escenarios acerca del flujo de fondos
                  proyectado.
                </li>
                <li>
                  Recomendar a la Secretaría sobre las mejores opciones sobre
                  inversiones de fondos temporalmente ociosos a fin de evitar la
                  pérdida de poder adquisitivo.
                </li>
                <li>
                  Realizar la programación de pagos mensuales en función de la
                  disponibilidad de fondos.
                </li>
                Indagar
                <li>
                  sobre las distintas opciones de financiamiento disponibles
                  para el sector público y recomendar a la Secretaría su
                  posibilidad de uso para financiar los distintos programas
                  municipales.
                </li>
                <li>
                  Elaborar indicadores e informes tanto sobre diversas aristas
                  de la actividad económica local como de ejecución
                  presupuestaria municipal.
                </li>
              </ol>
              <h5>Dirección General de Estadística, Control de Calidad y Procesos</h5>
              <ol>
                <li>Medir y evaluar la calidad de los servicios y prestaciones que brindan las diferentes áreas del Municipio de forma centralizada, independiente y multidimensional, generando una visión integral, con foco en el vecino.</li>
                <li>Determinar, medir y evaluar la alineación de los proyectos del Gobierno con los Objetivos de Desarrollo Sostenible definidos por la ONU y su grado de cumplimiento</li>
                <li>Acompañar activamente a la planificación, para garantizar la confiabilidad y la consistencia de los planes operativos anuales a implementarse, y a la evaluación del gasto, para seguir la ejecución del presupuesto de gestión orientada a resultados.</li>
                <li>Fomentar la coordinación entre las diferentes jurisdicciones para garantizar que los proyectos sean exitosos eficientizando el gasto.</li>
                <li>Acercar la información requerida por diferentes interlocutores del Gobierno para la evaluación y el seguimiento del Plan de Gobierno.</li>
                <li>Asistir a todas las áreas en la definición de sus planes estratégicos y prioriza los proyectos en función de los ejes de gestión y compromisos públicos</li>
                <li>Determinar indicadores de calidad, su metodología de medición y metas objetivo para promover la mejora en la prestación de los servicios que brinda el Gobierno de la Ciudad de Río Cuarto, en coordinación con las áreas competentes.</li>
                <li>Elaborar indicadores de medición de contribución a los ODS en coordinación con las áreas competentes.</li>
                <li>Monitorear los indicadores y coordinar los relevamientos para obtener mediciones objetivas de forma periódica.</li>
                <li>Realizar evaluaciones de impacto y retroalimentar a las áreas de Planificación y ejecución 48</li>
                <li>Documentar y monitorear las variables que permitan generar la información para la evaluación de los servicios, obteniendo mediciones de forma periódica.</li>
                <li>Realizar un diagnóstico de la capacidad de gestión en términos de impacto en la calidad de vida del ciudadano.</li>
                <li>Estandarizar la medición de la calidad de los servicios para lograr un nivel de servicio homogéneo al ciudadano, y facilitar la colaboración entre jurisdicciones para compartir mejores prácticas.</li>
                <li>Evaluar los servicios que presta el Gobierno de la Ciudad de Río Cuarto desde la experiencia del ciudadano, en coordinación con las áreas competentes.</li>
                <li>Asistir a las áreas evaluadas para lograr las mejoras que se propongan, generando herramientas basadas en metodologías de experiencia de usuario.</li>
                <li>Desarrollar y sistematizar con rigurosidad intervenciones para apoyar a las áreas de gobierno en la mejora de su performance en programas y proyectos.</li>
                <li>Asegurar una correcta presupuestación a los fines de garantizar la ejecución del plan de gobierno definido, buscando maximizar el impacto de los planes estratégicos a través de una eficiente distribución de los recursos públicos.</li>
                <li>Dar seguimiento permanente, analizar e interpretar la ejecución presupuestaria de cada área de gobierno</li>
                <li>Desarrollar e implementar mecanismos y metodologías de evaluación, análisis y control del gasto para el Gobierno de la Ciudad de Río Cuarto, enfocándose en la rentabilidad social del gasto.</li>
                <li>Realizar la evaluación expost de los principales programas y proyectos del Gobierno de la Ciudad de Río Cuarto.</li>
                <li>Coordinar la correcta implementación del Plan de Acción del Gobierno en el presupuesto general de gastos y cálculos de recursos en coordinación con la Subdirección General de Presupuesto y Unidades Ejecutoras</li>
                <li>Elaborar informes respecto del desarrollo y desempeño de las distintas actividades y/o áreas del Gobierno, para el seguimiento, el aporte en la comunicación de acciones y en la toma de decisiones por parte de su titular.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
