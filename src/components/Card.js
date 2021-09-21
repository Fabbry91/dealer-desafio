import React from 'react'

export const Card = () => {
    return (
        <div className="card-section">
            <div className="container">
                <div className="card">
                    <div className="content">
                        <h3>Por que elegirnos</h3>
                        <ul>
                            <li>Servicio de ventas las 24hs</li>
                            <li>Ventas Productos Certificados</li>
                            <li>Precios Competitivos</li>
                            <li>Más de 20 años de Experiencia</li>
                            <li>Variedad de Productos</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h3>Redes Sociales</h3>
                        <ul>
                            <li><a href="#" className="logo"><i class="bi bi-facebook" /> Facebook</a></li>
                            <li><a href="#" className="logo"><i class="bi bi-instagram" /> Instagram</a></li>
                            <li><a href="#" className="logo"><i class="bi bi-twitter" /> Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h3>Horarios en nuestro local</h3>
                        <ul>
                            <li>Lun-Vie: 9:00-5:00</li>
                            <li>Sabado: 11:00-7:00</li>
                            <li>Domingos:Cerrado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
