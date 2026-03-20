import type { character } from '../interfaces/character.types.ts'
import { Character } from './Character.tsx'
import styles from './Characters.module.css'

interface prop {
    characters: character[]
}

export function Characters({ characters }: prop) {

    return (
        <div className={styles.cards}>
            {
                characters?.map((character) => (
                    <Character key={character.id} character={character} />
                ))
            }
        </div>
    )
}