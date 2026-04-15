import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { STATIC_INDEX, searchItems } from '../lib/searchIndex';

export default function SearchResults() {
  const router = useRouter();
  const { q } = router.query;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [allItems, setAllItems] = useState(STATIC_INDEX);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (q) {
      setQuery(q);
    }
  }, [q]);

  useEffect(() => {
    setLoading(true);
    fetch('https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=100', {
      headers: { 'Portal-Id': 3 },
    })
      .then((r) => r.json())
      .then((data) => {
        const posts = (data?.data || []).map((p) => ({
          type: 'noticia',
          title: p.title,
          description: p.excerpt || '',
          url: `/noticias/${p.slug}?id=${p.id}`,
          thumbnail: p.thumbnail,
          date: p.date_published,
          external: false,
          icon: 'fa-newspaper',
          category: p.categories?.[0]?.name || 'Novedades'
        }));
        setAllItems([...STATIC_INDEX, ...posts]);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const found = searchItems(query, allItems);
      setResults(found);
    } else {
      setResults([]);
    }
  }, [query, allItems]);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/buscar?q=${encodeURIComponent(query)}`);
  };

  const tramites = results.filter(r => r.type === 'tramite' || r.type === 'seccion');
  const noticias = results.filter(r => r.type === 'noticia').slice(0, 6);

  return (
    <>
      <Head>
        <title>Resultados de búsqueda — Secretaría de Economía</title>
      </Head>

      <div className="container py-5">
        {/* Barra de búsqueda superior */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <form onSubmit={handleSearch} className="d-flex gap-2">
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar en el sitio..."
                style={{ borderRadius: '8px', border: '1px solid #ddd' }}
              />
              <button type="submit" className="btn btn-info btn-lg px-4 text-white fw-bold" style={{ borderRadius: '8px' }}>
                Buscar
              </button>
            </form>
            <div className="mt-3">
              <span className="text-muted fw-bold">Término de búsqueda: </span>
              <span className="text-primary fw-bold" style={{ color: '#E8651A !important' }}>&quot;{query}&quot;</span>
            </div>
          </div>
        </div>

        <div className="row g-5">
          {/* Columna Principal: Trámites */}
          <div className="col-lg-8">
            <h4 className="fw-bold mb-4" style={{ color: '#1a2840' }}>Trámites</h4>
            {tramites.length > 0 ? (
              <div className="search-results-list">
                {tramites.map((item, idx) => (
                  <div key={idx} className="mb-4">
                    <h5 className="mb-1">
                      {item.external ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary fw-bold" style={{ color: '#0080C8' }}>
                          {item.title}
                        </a>
                      ) : (
                        <Link href={item.url}>
                          <a className="text-decoration-none text-primary fw-bold" style={{ color: '#0080C8' }}>{item.title}</a>
                        </Link>
                      )}
                    </h5>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-4 text-muted">
                {loading ? 'Buscando...' : 'No se encontraron trámites relacionados.'}
              </div>
            )}
          </div>

          {/* Columna Lateral: Noticias Relacionadas */}
          <div className="col-lg-4">
            <h4 className="fw-bold mb-4" style={{ color: '#1a2840' }}>Noticias Relacionadas</h4>
            <div className="related-news-sidebar">
              {noticias.length > 0 ? (
                noticias.map((item, idx) => (
                    <Link href={item.url} key={idx}>
                        <a className="text-decoration-none d-block mb-3 p-2 rounded search-news-item" style={{ transition: 'background 0.2s' }}>
                            <div className="d-flex gap-3">
                                <div style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', backgroundColor: '#eee', position: 'relative' }}>
                                    {item.thumbnail ? (
                                        <Image src={item.thumbnail} alt={item.title} layout="fill" objectFit="cover" />
                                    ) : (
                                        <div className="h-100 w-100 d-flex align-items-center justify-content-center text-muted">
                                            <i className="fas fa-image"></i>
                                        </div>
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                        {item.date ? new Date(item.date).toLocaleDateString('es-AR') : ''}
                                    </div>
                                    <h6 className="mb-1 text-dark fw-bold text-truncate-2" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>
                                        {item.title}
                                    </h6>
                                    <div className="text-info fw-bold" style={{ fontSize: '0.75rem', color: '#0080C8' }}>
                                        {item.category}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))
              ) : (
                <div className="py-4 text-muted">
                  {loading ? 'Cargando noticias...' : 'No hay noticias relacionadas.'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .search-news-item:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </>
  );
}
