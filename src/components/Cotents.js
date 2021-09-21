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
            SetError({ ...error, err: true, msg: 'Nombre no es valido', state: 'is-invalid' });
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
        <div className="contents">

            <div className="content">
                <h2>Contactanos.</h2>
                <p >Por favor deje su información de contacto
                    para brindarle toda la información que necesita.</p>
            </div>

            <div className="container">
                <div className="contactInfo">

                    <div className="box">
                        <div className="icon"><i class="bi bi-geo-alt-fill" /></div>
                        <div className="text">
                            <h3>Direccion</h3>
                            <p>San Jose 4565 Guaymayen,<br />Mendoza CP 5505</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i class="bi bi-telephone-fill" /></div>
                        <div className="text">
                            <h3>Telefono</h3>
                            <p>+54 9 261-4374332</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i class="bi bi-envelope" /></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>callefalsa@gmail.com</p>
                        </div>
                    </div>

                </div>

                <div className="contactForm">
                    <form id="myform" className="mx-auto" autoComplete="off" onSubmit={Send}>
                        <h2>Envianos tus datos</h2>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={onChange}
                                onBlur={validator}
                                onKeyUp={validator}
                            />
                            <span>Nombre completo</span>
                        </div>
                        <div className="inputBox">
                            <input
                                type="email"
                                value={email}
                                onChange={onChange}
                                onBlur={validator}
                                onKeyUp={validator} />
                            <span>E-mail</span>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                value={phone}
                                onChange={onChange}
                                onBlur={validator}
                                onKeyUp={validator} />
                            <span>Telefono.</span>
                        </div>
                        {!lodaing ?
                            (<button type="submit" className="boton" >Enviar</button>
                            ) : (
                                <button type="submit" className="boton" disabled>Enviar</button>
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
        </div>

    )
}
