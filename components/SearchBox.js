import React, { useState, useEffect, useRef } from 'react';
import { STATIC_INDEX, searchItems } from '../lib/searchIndex';
import { useRouter } from 'next/router';

// Etiquetas visibles por tipo
const TYPE_LABELS = {
  seccion: { label: 'Sección', color: '#0080C8' },
  tramite: { label: 'Trámite', color: '#E8651A' },
  contacto: { label: 'Contacto', color: '#4eba74' },
  noticia: { label: 'Noticia', color: '#6c757d' },
};

// =============================================
// COMPONENTE SearchBox
// =============================================
const SearchBox = ({ overlay }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [allItems, setAllItems] = useState(STATIC_INDEX);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  // Carga noticias desde la API al montar el componente
  useEffect(() => {
    setLoadingPosts(true);
    fetch('https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=50', {
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
        }));
        setAllItems([...STATIC_INDEX, ...posts]);
      })
      .catch(() => {})
      .finally(() => setLoadingPosts(false));
  }, []);

  // Busca cuando cambia el query
  useEffect(() => {
    if (query.trim().length >= 2) {
      const found = searchItems(query, allItems).slice(0, 8);
      setResults(found);
      setIsOpen(found.length > 0);
      setActiveIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }, [query, allItems]);

  // Cierra al hacer clic fuera
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen && e.key !== 'Enter') return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
      inputRef.current?.blur();
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0) {
        e.preventDefault();
        navigateTo(results[activeIndex]);
      } else {
        // Redirigir a página de búsqueda si no hay item seleccionado y hay query
        if (query.trim().length >= 2) {
          e.preventDefault();
          router.push(`/buscar?q=${encodeURIComponent(query)}`);
          setIsOpen(false);
        }
      }
    }
  };

  const navigateTo = (item) => {
    setIsOpen(false);
    setQuery('');
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(item.url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeIndex >= 0 && results[activeIndex]) {
      navigateTo(results[activeIndex]);
    } else if (query.trim().length >= 2) {
      router.push(`/buscar?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const typeBadge = (type) => {
    const t = TYPE_LABELS[type] || { label: type, color: '#999' };
    return (
      <span
        className="sb-badge"
        style={{ background: t.color }}
      >
        {t.label}
      </span>
    );
  };

  return (
    <div
      className={overlay ? 'search-box-overlay' : 'search-box-portal pt-4 pb-2 mb-4'}
      ref={containerRef}
    >
      <div className="container">
        <div className="sb-wrapper">
          <form onSubmit={handleSubmit} className="d-flex w-100" autoComplete="off">
            <div className="sb-input-wrapper flex-grow-1 position-relative">
              <input
                ref={inputRef}
                id="search-input-main"
                type="text"
                className="form-control sb-input"
                placeholder="¿Qué estás buscando? (ej: trámites, pagos, licitaciones)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => results.length > 0 && setIsOpen(true)}
                aria-autocomplete="list"
                aria-controls="sb-results"
                aria-expanded={isOpen}
              />
              {query && (
                <button
                  type="button"
                  className="sb-clear-btn"
                  onClick={() => { setQuery(''); setResults([]); setIsOpen(false); inputRef.current?.focus(); }}
                  aria-label="Limpiar búsqueda"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
            <button type="submit" className="btn btn-info sb-btn" id="btn-buscar">
              Buscar
            </button>
          </form>

          {/* DROPDOWN DE RESULTADOS */}
          {isOpen && results.length > 0 && (
            <div className="sb-dropdown" id="sb-results" role="listbox" ref={dropdownRef}>
              <div className="sb-dropdown-header">
                <span>{results.length} resultado{results.length !== 1 ? 's' : ''} para "<strong>{query}</strong>"</span>
              </div>
              <ul className="sb-list">
                {results.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  const inner = (
                    <li
                      key={idx}
                      className={`sb-item${isActive ? ' sb-item--active' : ''}`}
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => navigateTo(item)}
                    >
                      <div className="sb-item-icon" style={{ background: `${TYPE_LABELS[item.type]?.color}18`, color: TYPE_LABELS[item.type]?.color }}>
                        <i className={`fas fa-fw ${item.icon || 'fa-link'}`}></i>
                      </div>
                      <div className="sb-item-body">
                        <div className="sb-item-title">
                          {item.title}
                          {item.external && <i className="fas fa-external-link-alt sb-ext-icon"></i>}
                        </div>
                        {item.description && (
                          <div className="sb-item-desc">{item.description.slice(0, 80)}{item.description.length > 80 ? '…' : ''}</div>
                        )}
                      </div>
                      <div className="sb-item-meta">
                        {typeBadge(item.type)}
                        {isActive && <i className="fas fa-arrow-right sb-arrow"></i>}
                      </div>
                    </li>
                  );
                  return inner;
                })}
              </ul>
              <div className="sb-dropdown-footer">
                <i className="fas fa-keyboard me-1"></i>
                Usa ↑↓ para navegar · Enter para abrir · Esc para cerrar
              </div>
            </div>
          )}

          {/* Sin resultados */}
          {isOpen && results.length === 0 && query.length >= 2 && (
            <div className="sb-dropdown">
              <div className="sb-no-results">
                <i className="fas fa-search-minus"></i>
                <p>No se encontraron resultados para "<strong>{query}</strong>"</p>
                <span>Intentá buscar: trámites, pagos, noticias, licencia...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
