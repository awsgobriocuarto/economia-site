import Link from 'next/link'
import React from 'react'

export default function BannerTop() {
  return (
    <div className="banner-top">
      <h4>Política de Calidad del Gobierno de Río Cuarto</h4>
      <p className="lead">Decreto N° 1681/2023</p>
      <p>Asumimos el compromiso de implementar, mantener y mejorar un Sistema de Gestión de calidad bajo diferentes ejes.</p>
      <Link href='/noticias/politica-de-calidad-municipal-1686589511?id=190' ><a className='btn btn-sm btn-outline-light'>Ver más</a></Link>
      {/* eslint-disable-next-line */}
      <img src="/images/ods-logo.png" alt="" className='ods' />
    </div>
  )
}
