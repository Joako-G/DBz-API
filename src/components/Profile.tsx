import type { UserInside } from "../interfaces/user.type"
import styles from './Profile.module.css'
import userImg from '../assets/user.png'
import type { character } from "../interfaces/character.types"
import { Character } from "./Character"

interface ProfileProps {
    user: UserInside;
    favorites: character[]
}

export function Profile({ user, favorites }: ProfileProps) {
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
                <div className={styles.cards}>
                    {
                        favorites.map((fav) => (
                            <Character character={fav} key={fav.id} />
                        ))
                    }
                </div>
            </section>
        </div>

    )
}