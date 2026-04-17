import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
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
    name: "Cr. Hernán Avanzini",
    position: "Dirección de Gestión Tributaria",
    cv: "https://drive.google.com/file/d/1CVzqYkVte339wYYtHtMn5V_Dv1KPNke_/view?usp=share_link",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1669128626/Economia/Web/institucional-hernan-avanzini_esn2h0.png",
  },
  {
    id: 5,
    name: "Eduardo Ochoa",
    position: "Dirección Gral. de Informática",
    cv: "https://drive.google.com/file/d/102njAAL0qmAbu8dHiXMQBOdExc5r-Ja4/view?usp=sharing",
    img: "https://res.cloudinary.com/gobriocuarto/image/upload/v1741620322/Economia/Web/institucional-eduardo-ochoa.jpg",
  },
];

const competencias = [
  "Elaborar anualmente el Proyecto de Presupuesto de Gastos y Recursos en función de los lineamientos generales del Departamento Ejecutivo Municipal, así como la Ordenanza Tarifaria Anual.",
  "Confeccionar anualmente la Cuenta General del Ejercicio conteniendo el estado de la ejecución presupuestaria y el estado de situación patrimonial del ejercicio.",
  "Promover y generar una cultura estratégica tributaria alineada con los objetivos de la recaudación y los lineamientos generales de la gestión.",
  "Señalar las normas administrativas, económicas y financieras de la administración municipal y proponer las adecuaciones correspondientes.",
  "Proponer, participar y coadyuvar en la elaboración de políticas económicas que hagan al interés general de la comunidad.",
  "Coordinar la elaboración de propuestas y formular alternativas para la fijación de políticas y medidas de carácter municipal.",
  "Asistir al Intendente en la coordinación de políticas y medidas con otros organismos referidos a la programación económica de la Región, la Provincia y la Nación.",
];

const direcciones = [
  {
    id: "recursos",
    icon: "fa-coins",
    title: "Dirección Gral. de Recursos",
    items: [
      "Proponer normas generales para reglamentar el cumplimiento de los deberes formales y dictar resoluciones interpretativas de normas fiscales.",
      "Supervisar directamente al personal de la Dirección General de Recursos, aplicando las sanciones previstas en el Estatuto Municipal.",
      "Aplicar las disposiciones de las Ordenanzas que rigen la relación jurídica-tributaria y demás normas obligatorias.",
      "Establecer mecanismos de control de la recaudación y coordinar la distribución de cedulones y notificaciones.",
    ],
  },
  {
    id: "tributaria",
    icon: "fa-file-invoice-dollar",
    title: "Dirección Gral. de Gestión Tributaria",
    items: [
      "Coordinar y fortalecer acciones para optimizar los niveles de recaudación, generando una conducta tributaria de cumplimiento voluntario.",
      "Ejecutar procesos de medición de resultados, planes y proyectos del área conforme a las directivas del DEM.",
      "Promover la digitalización de trámites y procedimientos, tanto internos como externos.",
      "Detectar omisión y evasión de tributos mediante distintos procedimientos y gestionar el cobro judicial.",
    ],
  },
  {
    id: "administrativa",
    icon: "fa-landmark",
    title: "Dirección Gral. Administrativa",
    items: [
      "Asegurar la legalidad en el manejo de los fondos del patrimonio público y garantizar la transparencia fiscal.",
      "Procurar el correcto desarrollo de las tareas administrativas relativas a la Ejecución del Presupuesto de Gasto y Cálculo de Recursos.",
      "Llevar la Contabilidad Presupuestaria y Patrimonial de la Administración Central del Municipio.",
      "Administrar los RRHH de la Dirección y supervisar las comunicaciones internas relativas a faltas y sanciones.",
    ],
  },
  {
    id: "finanzas",
    icon: "fa-chart-line",
    title: "Dirección Gral. de Finanzas y Gestión",
    items: [
      "Realizar el proceso de programación financiera municipal planteando distintos escenarios sobre el flujo de fondos proyectado.",
      "Recomendar a la Secretaría sobre las mejores opciones de inversión de fondos temporalmente ociosos.",
      "Indagar sobre las distintas opciones de financiamiento disponibles para el sector público.",
      "Elaborar indicadores e informes sobre la actividad económica local y la ejecución presupuestaria municipal.",
    ],
  },
  {
    id: "informatica",
    icon: "fa-laptop-code",
    title: "Dirección Gral. de Informática",
    items: [
      "Proveer soluciones de tecnología de la información que faciliten los objetivos en los distintos sectores.",
      "Definir las características técnicas y la adecuación de sistemas, hardware, red y comunicaciones.",
      "Planificar, dirigir y controlar los recursos informáticos del área a cargo.",
    ],
  },
];

export default function Institucional() {
  return (
    <>
      <Head>
        <title>Institucional — Secretaría de Economía · Municipalidad de Río Cuarto</title>
        <meta
          name="description"
          content="Conocé la estructura institucional, competencias y direcciones generales de la Secretaría de Economía de la Municipalidad de Río Cuarto."
        />
      </Head>

      {/* ===== SECTION HEADER ===== */}
      <div className="container">
        <SectionHeader
          title="Institucional"
          subtitle="Secretaría de Economía · Municipalidad de Río Cuarto"
          bgImage="/images/institucional-bg.png"
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <section className="institutional py-4">
        <div className="container">
          <div className="row g-5">

            {/* ===== COLUMNA IZQUIERDA: CONTENIDO ===== */}
            <div className="col-lg-7 order-1 order-lg-0">

              {/* Etiqueta + título */}
              <p className="inst-label">SECRETARÍA DE ECONOMÍA</p>
              <h1 className="inst-main-title">
                Competencias y Funciones
              </h1>
              <p className="inst-intro">
                La Secretaría de Economía de la Municipalidad de Río Cuarto tiene a su cargo
                la administración y planificación financiera, tributaria e informática del
                municipio. Según lo establecido por el artículo 7° de la Carta Orgánica
                Municipal, sus principales competencias son:
              </p>

              {/* Lista de competencias */}
              <ul className="inst-competencias-list mb-5">
                {competencias.map((item, i) => (
                  <li key={i} className="inst-competencias-list__item">
                    <span className="inst-competencias-list__bullet">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Divisor */}
              <div className="inst-section-divider mb-4">
                <h2 className="inst-section-title">
                  <i className="fas fa-sitemap me-2"></i>
                  Misiones y Funciones por Dirección
                </h2>
              </div>

              {/* Cards de direcciones */}
              <div className="inst-directions">
                {direcciones.map((dir) => (
                  <div key={dir.id} className="inst-direction-card">
                    <div className="inst-direction-card__header">
                      <div className="inst-direction-card__icon">
                        <i className={`fas fa-fw ${dir.icon}`}></i>
                      </div>
                      <h3 className="inst-direction-card__title">{dir.title}</h3>
                    </div>
                    <ul className="inst-direction-card__list">
                      {dir.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== COLUMNA DERECHA: ORGANIGRAMA ===== */}
            <div className="col-lg-5 order-0 order-lg-1">
              <div className="inst-organigrama">
                <h2 className="inst-organigrama__title">
                  <i className="fas fa-users me-2"></i>Organigrama
                </h2>

                {/* Autoridades */}
                <p className="inst-organigrama__group-label">Autoridades</p>
                <div className="row g-3 mb-4">
                  {officials.map((official) => (
                    <div key={official.id} className="col-6">
                      <InstitutionalCard data={official} />
                    </div>
                  ))}
                </div>

                {/* Directores */}
                <p className="inst-organigrama__group-label">Direcciones Generales</p>
                <div className="row g-3">
                  {persons.map((person) => (
                    <div key={person.id} className="col-6">
                      <InstitutionalCard data={person} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
