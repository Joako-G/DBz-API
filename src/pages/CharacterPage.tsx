import { useParams } from "react-router-dom";
import { CharacterInfo } from "../components/CharacterInfo";
import { useEffect, useState } from "react";
import type { CharacterId } from "../interfaces/character.types";
import styles from './CharacterPage.module.css'

export default function CharacterPage() {
    const [character, setCharacter] = useState<CharacterId>()
    const params = useParams()

    useEffect(() => {
        async function getCharacterId(id: number) {
            try {
                const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)
                const json = response.json()
                return json
            } catch (error) {
                throw new Error('Ha ocurrido un problema inesperad!!!')
            }
        }

        getCharacterId(Number(params.id))
            .then(data => setCharacter(data))
    }, [])

    return (
        <div className={styles.container}>
            <CharacterInfo character={character!} />
        </div>
    )
}