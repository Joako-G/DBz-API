import type { character } from "../interfaces/character.types.ts"
import { useAuthStore } from "../store/useAuthStore.ts"
import { useFavoriteStore } from "../store/useFavoriteStore.ts"
import styles from './Character.module.css'
import { raceGradients } from "../utils/raceGradients.ts"
import { useNavigate } from "react-router-dom"

interface prop {
    character: character;
}

export function Character({ character }: prop) {
    const { user } = useAuthStore()

    const addFavorite = useFavoriteStore(state => state.addFavorite)
    const removeFavorite = useFavoriteStore(state => state.removeFavorite)
    const isFavorite = useFavoriteStore(state => state.isFavorite)



    const navigate = useNavigate()

    const bgColor = raceGradients[character.race] || "linear-gradient(135deg, #ccc, #999)";
    const isFav = isFavorite(character.id)

    const handleClickFavorites = () => {
        if (isFav) {
            removeFavorite(character.id)
        } else {
            addFavorite(character.id)
        }
    }

    return (
        < div className={styles.card} >
            <img style={{ background: bgColor }} src={character.image} alt={character.name} />
            <div className={styles.charInfo}>
                <h3 className={styles.title}>{character.name} </h3>
                <p className={styles.race}> {character.race} </p>
                <p> <strong>Poder: </strong>{character.ki} </p>
                <p> <strong>Poder Max.:</strong> {character.maxKi} </p>
            </div>


            <div className={styles.btnActions}>
                <button className={styles.more} onClick={() => navigate(`/characters-detail/${character.id}`)}> Ver mas </button>
                <button className={styles.favorite} disabled={!user} style={{ pointerEvents: !user ? 'none' : 'auto' }} onClick={handleClickFavorites}>
                    <svg className={styles.heart} style={{ fill: isFav ? 'red' : 'white' }} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </button>
            </div>
        </div >

        // <div>
        //     {
        //         !loading ?
        //             < div className={styles.card} >
        //                 <img style={{ background: bgColor }} src={character.image} alt={character.name} />
        //                 <div className={styles.charInfo}>
        //                     <h3 className={styles.title}>{character.name} </h3>
        //                     <p className={styles.race}> {character.race} </p>
        //                     <p> <strong>Poder: </strong>{character.ki} </p>
        //                     <p> <strong>Poder Max.:</strong> {character.maxKi} </p>
        //                 </div>


        //                 <div className={styles.btnActions}>
        //                     <button className={styles.more} onClick={() => navigate(`/characters-detail/${character.id}`)}> Ver mas </button>
        //                     <button className={styles.favorite} disabled={!user} style={{ pointerEvents: !user ? 'none' : 'auto' }} onClick={handleClickFavorites}>
        //                         <svg className={styles.heart} style={{ fill: isFav ? 'red' : 'white' }} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        //                             strokeLinejoin="round">
        //                             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
        //                             </path>
        //                         </svg>
        //                     </button>
        //                 </div>




        //             </div > :
        //             <div className="flex justify-center items-center">
        //                 <div className="flex flex-col gap-4 bg-black h-[520px] w-[300px] p-3">
        //                     <div className="animate-pulse">
        //                         <div className="mx-[20px] h-[330px] bg-gray-200">

        //                         </div>

        //                     </div>
        //                     <div className="animate-pulse m-2 ">
        //                         <div className="mx-2 w-full h-[40px] bg-gray-200 items-center">

        //                         </div>

        //                     </div>
        //                     <div className="animate-pulse">
        //                         <div className="w-full h-[25px] bg-gray-200 items-center">

        //                         </div>

        //                     </div>
        //                     <div className="animate-pulse">
        //                         <div className="w-full h-[25px] bg-gray-200 items-center">

        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //     }
        // </div>


    )
}

// text-violet-950 mt-1 p-6 w-32

/*
 <div className="flex justify-center items-center">
                <div className="flex flex-col gap-4 bg-black h-[520px] w-[300px] p-3">
                    <div className="animate-pulse">
                        <div className="mx-[20px] h-[330px] bg-gray-200">

                        </div>

                    </div>
                    <div className="animate-pulse m-2 ">
                        <div className="mx-2 w-full h-[40px] bg-gray-200 items-center">

                        </div>

                    </div>
                    <div className="animate-pulse">
                        <div className="w-full h-[25px] bg-gray-200 items-center">

                        </div>

                    </div>
                    <div className="animate-pulse">
                        <div className="w-full h-[25px] bg-gray-200 items-center">

                        </div>

                    </div>
                </div>
            </div>
 */