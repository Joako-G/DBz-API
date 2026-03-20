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
                <form onSubmit={handleSubmit} role="search" className={styles.formLogin}>
                    {/* <label htmlFor=""></label> */}
                    <input
                        className={styles.formInput}
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <input
                        className={styles.formInput}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className={styles.btnLogIn}>Log in</button>
                    {!user && error && <p style={{ color: "red" }}>{error}</p>}

                </form>
            </div>
        </section>
    )
}