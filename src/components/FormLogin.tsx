import React, { useEffect, useState } from 'react'
import styles from './FormLogin.module.css'
import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router-dom'

export function FormLogin() {
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const { error, user, login } = useAuthStore()

    useEffect(() => {
        if (user) navigate('/')
    }, [user])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login(userName, password)

    }

    return (
        <section className={styles.container}>
            <div className={styles.containerLogin}>
                <h1 className={styles.title}>Bienvenido</h1>
                <form onSubmit={handleSubmit} role="search" className={styles.formLogin}>
                    <div className={styles.inputs}>
                        <label htmlFor="username">Usuario</label>
                        <div className={styles.bgInput}>
                            <input
                                className={styles.formInput}
                                id='username'
                                type="text"
                                placeholder="Usuario"
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="password">Contraseña</label>
                        <div className={styles.bgInput}>
                            <input
                                className={styles.formInput}
                                id='password'
                                type="password"
                                placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button className={styles.btnLogIn}>Log in</button>
                    {!user && error && <p style={{ color: "red", marginTop: '5px' }}>{error}</p>}

                </form>
            </div>
        </section>
    )
}