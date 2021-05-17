import React, { useState } from 'react'
import { expresiones } from '../helpers/exprexionesRegulares'
import { Loading } from './Loading';
import { MsgError } from './MsgError'
import { Success } from './Success';

export const Cotents = () => {

    const url = 'https://hook.integromat.com/d8v2qioxjpcgkgtz4agvj4g3c229xisb/';

    const [lodaing, setLoading] = useState(null);
    const [success, setSuccess] = useState(false);

    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const [error, SetError] = useState({
        err: false,
        msg: '',
        state: ''
    })

    const { name, phone, email } = user;
    const { nombre, correo, telefono } = expresiones;




    const { err, msg, state } = error;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const Send = async (e) => {
        e.preventDefault();
        setLoading({ lodaing });
        if (validator()) {
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(response => console.log(response.status))
            //window.location.reload();
            setUser({
                name: '',
                phone: '',
                email: ''
            });
            setLoading();
            setSuccess(true);
        }


    }

    const validator = () => {
        if (!nombre.test(name)) {
            SetError({ ...error, err: true, msg: 'Name no es valido', state: 'is-invalid' });
            return false;
        } else if (!correo.test(email)) {
            SetError({ ...error, err: true, msg: 'Email no es valido', state: 'is-invalid' });
            return false;
        } else if (!telefono.test(phone)) {
            SetError({ ...error, err: true, msg: 'Telefono no es valido', state: 'is-invalid' });
            return false;
        }
        SetError({ ...error, err: false, state: 'is-valid' });
        return true;
    }

    return (
        <>
            <div className="row">
                <div className="col-ms col-md contact">
                    <div className="mx-auto">
                        <h2 className="text-white">Contactanos.</h2>
                        <p className="text-white">Por favor deje su información de contacto
                        para <br /> brindarle toda la información que necesita.</p>
                    </div>
                </div>
                <div className="col-ms col-md forms">
                    <form id="myform" className="mx-auto" autoComplete="off" onSubmit={Send}>
                        <input
                            className={`form-control mb-2`}
                            type="text"
                            placeholder="Nombre completo"
                            name="name"
                            value={name}
                            onChange={onChange}
                            onBlur={validator}
                            onKeyUp={validator}
                        />
                        <input
                            className="form-control mb-2"
                            type="email"
                            placeholder="Direccion e-mail"
                            name="email"
                            value={email}
                            onChange={onChange}
                            onBlur={validator}
                            onKeyUp={validator} />

                        <input
                            className="form-control mb-2"
                            type="text"
                            placeholder="Telefono"
                            name="phone"
                            value={phone}
                            onChange={onChange}
                            onBlur={validator}
                            onKeyUp={validator} />

                        {!lodaing ?
                            (<button type="submit" className="btn btn-primary mt-3" >Enviar</button>
                            ) : (
                                <button type="submit" className="btn btn-primary mt-3" disabled>Enviar</button>
                            )
                        }
                        {
                            lodaing &&
                            < Loading />
                        }

                        {err &&
                            <MsgError Obj={error} />
                        }

                        {success === true &&
                            <Success />
                        }
                    </form>
                </div>
            </div>

            <div className="cards my-2">
                <div className="row">
                    <div className="col-md col-lg widget">
                        <h4>Por que elegirnos.</h4>
                        <p style={{ fontSize: 15 }}>Servicio de ventas las 24hs del día. <br />
                        Experencia Certificada.<br />
                        Precios Competitivos. <br />
                        Más de 20 años de experencia.</p>
                    </div>
                    <div className="col-md col-lg widget2">
                        <h4 className="text-white">Nuestras oficinas.</h4>
                        <p className="text-white" style={{ fontSize: 15 }}>Dirección: San Martín 584 Mendoza.  <br />
                       Telefono: (261) 12345678.<br />
                       E-mail: phoneCel@email.com. <br />
                        </p>
                    </div>
                    <div className="col-md col-lg widget">
                        <h4>Horarios de comercio.</h4>
                        <p style={{ fontSize: 15 }}>Lun a Vie: 9:00 - 17:00.  <br />
                        Sabados: 10:00 - 13:00. <br />
                        Domingo: Cerrado. <br />
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
