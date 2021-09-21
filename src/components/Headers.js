import React from 'react'

export const Headers = () => {
    return (
        <div className="header">

            <div className="textBox">
                <h3>Nuevo Iphone</h3>
                <p> La nueva cámara ultra gran angular captura más detalle en las zonas oscuras de tus fotos
                    La nueva cámara gran angular
                </p>
                <a href="#">Ver más</a>
            </div>

            <div className="img-header">
                <img src={process.env.PUBLIC_URL + "/assets/img/clu.png"} className="mosque" alt="" />
            </div>
        </div>
    )
}
