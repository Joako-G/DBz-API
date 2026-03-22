import type { CharacterId } from "../interfaces/character.types"
import styles from './CharacterInfo.module.css'

interface props {
    character: CharacterId
}

export function CharacterInfo({ character }: props) {

    if (!character) return

    return (
        <>
            <header className={styles.headerProfile}>
                <div className={styles.info}>
                    <h1 className={styles.title}> {character.name} </h1>
                    <div className={styles.tags}>
                        <div className={styles.tag}>
                            <p className={styles.tagName}> PODER </p>
                            <p className={styles.tagValue}> {character.ki} </p>
                        </div>
                        <div className={styles.tag}>
                            <p className={styles.tagName}> ORIGEN </p>
                            <p className={styles.tagValue}> {character.originPlanet.name} </p>
                        </div>
                        <div className={styles.tag}>
                            <p className={styles.tagName}> RAZA </p>
                            <p className={styles.tagValue}> {character.race} </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={character.image} alt={character.name} />
                </div>
            </header>

            <section className={styles.origin}>
                <div className={styles.originInfo}>
                    <h1 className={styles.title}> Sobre {character.name} </h1>
                    <p> {character.description} </p>
                    <h1 className={styles.title}>  {character.originPlanet.name} </h1>
                    <p> {character.originPlanet.description} </p>
                </div>
                <div className={styles.originImg}>
                    <img src={character.originPlanet.image} alt={character.originPlanet.name} />
                </div>
            </section>

            <section className={styles.transformations}>
                <h1 className={styles.title}>Transformaciones</h1>
                <div className={styles.container}>
                    {
                        character.transformations.length > 0 ?
                            character.transformations.map((t) => (
                                <div className={styles.card} key={t.id}>
                                    <h4 className={styles.name}> {t.name} </h4>
                                    <img src={t.image} alt={t.name} />
                                </div>
                            ))
                            :
                            (<h1> No tiene ninguna transformacion</h1>)
                    }
                </div>

            </section>
        </>
    )
}