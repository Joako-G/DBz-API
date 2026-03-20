import type { UserInside } from "../interfaces/user.type"
import styles from './Profile.module.css'

interface ProfileProps {
    user: UserInside
}

export function Profile({ user }: ProfileProps) {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.container}>
                <h1>Perfil</h1>
                <p> <strong>Nombre: </strong> {user?.name} </p>
                <p> <strong>Apellido: </strong> {user?.lastname} </p>
                <p> <strong>Nombre de usuario</strong> {user?.username} </p>
                <div>
                    Lista de favoritos: []
                </div>
            </div>
        </section>
    )
}