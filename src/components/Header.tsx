import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { useAuthStore } from '../store/useAuthStore'

export function Header() {
    const { token, logout } = useAuthStore()
    const navigate = useNavigate()

    const handleClickLogut = () => {
        logout()
        navigate('/')
    }

    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <NavLink to='/'>
                    <h1 className={styles.titleLogo}><strong>DBz-API</strong></h1>
                </NavLink>
            </div>
            <nav className={styles.navLinks}>
                <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to={'/'}>
                    Inicio
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to='/characters'>
                    Personajes
                </NavLink>
                {
                    token ? <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to='/profile'>
                        Perfil
                    </NavLink> : ''
                }
            </nav>
            {
                token ? <div className={styles.login}><button className={styles.btn} onClick={handleClickLogut}>Logout</button></div> : (
                    <div className={styles.login}>
                        <button className={styles.btnLogin} onClick={() => navigate('/login')}>Login</button>
                        <button className={styles.btn} onClick={() => navigate('/register')}>Register</button>
                    </div>
                )
            }
        </header>
    )
}