import type { UserInside } from "../interfaces/user.type"
import styles from './Profile.module.css'
import userImg from '../assets/user.png'

interface ProfileProps {
    user: UserInside
}

export function Profile({ user }: ProfileProps) {
    return (
        <div className={styles.container}>
            <section className={styles.userSection}>
                <img src={userImg} alt="User Image" />
                <div className={styles.info}>
                    <h1 className={styles.title}> {user.name} {user.lastname} </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis repudiandae voluptas autem dolore sed corporis illo optio, expedita sequi natus, esse fugit praesentium veritatis, est dolorum vero unde distinctio?</p>
                </div>
            </section>

            <section className={styles.userFav}>
                <div>
                    Lista de favoritos: []
                </div>
            </section>
        </div>

    )
}