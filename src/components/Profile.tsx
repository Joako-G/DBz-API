import type { UserInside } from "../interfaces/user.type"
import styles from './Profile.module.css'
import userImg from '../assets/user.png'
import type { CharacterId } from "../interfaces/character.types"
import { Character } from "./Character"

interface ProfileProps {
    user: UserInside;
    favorites: CharacterId[]
}

// function useCharacters(favorites: number[]) {
//     let characters = []

//     useEffect(() => {
//         async function getCharacterId(id: number) {
//             try {
//                 const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)
//                 const json = await response.json()
//                 return json
//             } catch (error) {
//                 throw new Error('Ha ocurrido un problema inesperad!!!')
//             }
//         }



//     }, [])

// }

export function Profile({ user, favorites }: ProfileProps) {
    console.log('Favorites Profile: ', favorites)
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