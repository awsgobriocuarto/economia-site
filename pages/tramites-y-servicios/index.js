import React, { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Panel } from "../../components/elements/panel/Panel";
import SectionHeader from "../../components/SectionHeader";
import SearchBox from "../../components/SearchBox";

export default function TramitesYServicios({ categories = [] }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Soporte para leer término de búsqueda por parámetro de URL (?q= o ?buscar=)
  useEffect(() => {
    if (router.query?.q) {
      setSearchTerm(String(router.query.q));
    } else if (router.query?.buscar) {
      setSearchTerm(String(router.query.buscar));
    }
  }, [router.query]);

  // Normalización para ignorar tildes, diacríticos y mayúsculas
  const normalizeText = (text) =>
    (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  // Filtrar categorías y trámites según el término ingresado
  const filteredCategories = useMemo(() => {
    const cleanQuery = normalizeText(searchTerm);
    if (!cleanQuery) return categories || [];

    const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

    return (categories || [])
      .map((category) => {
        const catNormalized = normalizeText(category.name);
        const filteredItems = (category.items || []).filter((item) => {
          const titleNormalized = normalizeText(item.title);
          return queryTokens.every(
            (token) => titleNormalized.includes(token) || catNormalized.includes(token)
          );
        });

        return {
          ...category,
          items: filteredItems,
        };
      })
      .filter((category) => category.items && category.items.length > 0);
  }, [categories, searchTerm]);

  // Conteo total de trámites encontrados con el filtro activo
  const totalResultsCount = useMemo(() => {
    return (filteredCategories || []).reduce(
      (acc, cat) => acc + (cat.items ? cat.items.length : 0),
      0
    );
  }, [filteredCategories]);

  const hasSearch = searchTerm.trim().length > 0;

  return (
    <>
      <Head>
        <title>Sec. de Economía Río Cuarto - Trámites y Servicios</title>
      </Head>

      <section className="pt-5 pb-5">
        <div className="container">
          <SectionHeader
            title="TRÁMITES Y SERVICIOS"
          />

          {/* BUSCADOR DE TRÁMITES (ESTILO INICIO) */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-10 col-xl-9">
              <SearchBox
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={setSearchTerm}
                hideDropdown={true}
                placeholder="¿Qué estás buscando? (ej: trámites, pagos, licitaciones)"
                idPrefix="tramites"
                className="pt-2 pb-2 mb-2"
              />
            </div>
          </div>

          {/* INDICADOR DE FILTRO ACTIVO */}
          {hasSearch && (
            <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom flex-wrap gap-2">
              <div>
                <span className="text-muted fs-6">
                  {totalResultsCount > 0 ? (
                    <>
                      Mostrando <strong>{totalResultsCount}</strong> trámite{totalResultsCount !== 1 ? 's' : ''} para &quot;<span className="text-primary fw-bold">{searchTerm}</span>&quot;
                    </>
                  ) : (
                    <>
                      No se encontraron trámites para &quot;<span className="text-primary fw-bold">{searchTerm}</span>&quot;
                    </>
                  )}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setSearchTerm('')}
                id="btn-limpiar-filtro-tramites"
              >
                <i className="fas fa-times me-1"></i> Limpiar filtro
              </button>
            </div>
          )}

          {/* LISTADO DE CATEGORÍAS Y TRÁMITES */}
          {filteredCategories && filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.name} className="mb-5">
                <h2 className="text-primary mb-4" style={{ fontWeight: '700', fontSize: '1.75rem' }}>
                  {category.name}
                  {hasSearch && (
                    <span className="badge bg-light text-muted ms-2 fs-6 fw-normal">
                      ({category.items.length})
                    </span>
                  )}
                </h2>
                <Panel items={category.items} />
              </div>
            ))
          ) : hasSearch ? (
            /* ESTADO CUANDO NO SE ENCUENTRAN RESULTADOS */
            <div className="card text-center p-5 my-5 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#f8f9fa' }}>
              <div className="mb-3">
                <i className="fas fa-search-minus fa-3x text-muted" style={{ opacity: 0.6 }}></i>
              </div>
              <h4 className="fw-bold text-secondary mb-2">No se encontraron trámites</h4>
              <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
                No encontramos ningún trámite que coincida con &quot;<strong>{searchTerm}</strong>&quot;.
                Intentá buscar con otros términos como <em>inmobiliario</em>, <em>patente</em>, <em>comercio</em>, <em>libre deuda</em> o <em>proveedores</em>.
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-primary text-white px-4 py-2"
                  style={{ borderRadius: '8px', fontWeight: '600' }}
                  onClick={() => setSearchTerm('')}
                >
                  <i className="fas fa-arrow-left me-2"></i> Ver todos los trámites
                </button>
              </div>
            </div>
          ) : (
            <div className="alert alert-info">
              No hay trámites disponibles en este momento.
            </div>
          )}

          <div className="banner secondary mt-5">
            <div>
              <h3>Cedulón Digital</h3>
              <p className="lead">
                Consulta la cantidad de contribuyentes que ya se adhirieron al
                programa #AhoraDigital
              </p>
            </div>
            <div>
              <a
                className="btn btn-primary text-white text-uppercase"
                href="https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.statscedulon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar Datos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  let categories = [];
  try {
    const token = process.env.EXTERNAL_API_TOKEN;
    const res = await fetch(
      "https://gestionweb.gobiernoriocuarto.gob.ar/api/v1/procedures?area=3",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.data && Array.isArray(data.data) ? data.data : []);
      
      const mappedItems = list.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.url || "/",
        urlExternal: true,
        category: item.categories && item.categories.length > 0 ? item.categories[0].name : "Otros Trámites"
      }));

      const order = [
        "Ambiente y Sostenibilidad",
        "Pagos y Deudas",
        "Proveedores y Licitaciones",
        "Gestión de Propiedad y Contribuciones",
        "Habilitaciones, Registros y Licencias",
        "Tránsito y Movilidad"
      ];

      categories = order.map(catName => ({
        name: catName,
        items: mappedItems.filter(item => item.category === catName)
      })).filter(cat => cat.items.length > 0);

      // Si hay categorías que no están en el orden establecido, las agregamos al final
      const uniqueCatsInList = [...new Set(mappedItems.map(item => item.category))];
      uniqueCatsInList.forEach(catName => {
        if (!order.includes(catName)) {
          categories.push({
            name: catName,
            items: mappedItems.filter(item => item.category === catName)
          });
        }
      });

    } else {
      console.error("Error fetching procedures:", res.statusText);
    }
  } catch (error) {
    console.error("Error fetching procedures in getStaticProps:", error);
  }

  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
}
