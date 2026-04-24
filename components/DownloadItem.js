import React from "react";

export default function DownloadItem({ title, url, variant = "primary" }) {
  return (
    <div className={`download-item-card ${variant}`}>
      <div className="dic-content">
        <span className="dic-title">{title}</span>
        {url ? (
          <a href={url} className="btn btn-download" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-download me-2 d-none d-md-inline"></i>
            Descargar
          </a>
        ) : (
          <span className="btn btn-download disabled">Pendiente</span>
        )}
      </div>

      <style jsx>{`
        .download-item-card {
          background-color: #f1f4f8;
          border-radius: 12px;
          padding: 16px 24px;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        .download-item-card:hover {
          background-color: #fff;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transform: translateY(-2px);
          border-color: #0099db;
        }
        .download-item-card.secondary {
          background-color: #f8fafc;
          opacity: 0.85;
        }
        .dic-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .dic-title {
          font-weight: 600;
          color: #2d3748;
          font-size: 1.1rem;
        }
        .btn-download {
          background-color: #003366; // Azul oscuro institucional como en la imagen
          color: white;
          border-radius: 8px;
          padding: 8px 25px;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
          transition: all 0.2s;
        }
        .btn-download:hover {
          background-color: #004488;
          transform: scale(1.02);
          color: white;
        }
        .btn-download.disabled {
            background-color: #cbd5e0;
            color: #718096;
        }

        @media (max-width: 767px) {
          .download-item-card {
            padding: 12px 16px;
          }
          .dic-title {
            font-size: 0.95rem;
          }
          .btn-download {
            padding: 6px 15px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
