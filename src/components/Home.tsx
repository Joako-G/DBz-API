import styles from './Home.module.css'
import image from '../assets/Adobe Express - file.png'
import type { character } from '../interfaces/character.types'
import { useNavigate } from 'react-router-dom'
import { raceGradients } from '../utils/raceGradients'

export function Home() {
    const navigae = useNavigate()

    const characters: character[] = [
        {
            "id": 1,
            "name": "Goku",
            "ki": "60.000.000",
            "maxKi": "90 Septillion",
            "race": "Saiyan",
            "gender": "Male",
            "description": "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
            "image": "https://dragonball-api.com/characters/goku_normal.webp",
            "affiliation": "Z Fighter"
        },
        {
            "id": 2,
            "name": "Vegeta",
            "ki": "54.000.000",
            "maxKi": "19.84 Septillion",
            "race": "Saiyan",
            "gender": "Male",
            "description": "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
            "image": "https://dragonball-api.com/characters/vegeta_normal.webp",
            "affiliation": "Z Fighter",
        },
        {
            "id": 5,
            "name": "Freezer",
            "ki": "530.000",
            "maxKi": "52.71 Septillion",
            "race": "Frieza Race",
            "gender": "Male",
            "description": "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
            "image": "https://dragonball-api.com/characters/Freezer.webp",
            "affiliation": "Army of Frieza",
        },
    ]

    return (
        <main className={styles.container}>
            <section className={styles.primarySection}>
                <div className={styles.info}>
                    <h1 className={styles.title}> Dragon Ball Z</h1>
                    <h1 className={styles.accent} >Characters</h1>
                    <p>
                        Aquí podras buscar a cualquier personaje de la saga de Dragon ball Z
                        para conocer su historia y transformaciones
                    </p>
                    <button className={styles.moreCharacters} onClick={() => navigae('/characters')}>
                        Explorar Personajes
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </button>
                </div>

                <div className={styles.card}>
                    <img src={image} alt="Imagen de card" />
                </div>

            </section>

            <section className={styles.someCharacters}>
                {/* <h2 className={styles.title}>Algunos personajes</h2> */}
                {
                    characters.map((char) => {
                        const bgColor = raceGradients[char.race] || "linear-gradient(135deg, #ccc, #999)"

                        return (
                            <div className={styles.card} key={char.id}>
                                <img src={char.image} alt={char.name} style={{ background: bgColor }} />
                                <div className={styles.charInfo}>
                                    <h3 className={styles.name}> {char.name} </h3>
                                    <h3> {char.race} </h3>
                                    <h3> {char.ki} </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <section className={styles.aboutProject}>
                <div className={styles.project}>
                    <h2>DBz Characters</h2>
                    <p>
                        Este proyecto fue realizado para poner en practica todos mis conocimientos en <strong>Programcion </strong>
                        y practicar nuevos conceptos de desarrollo web.
                    </p>
                    <h2>Tecnologias</h2>
                    <p>
                        Para construir este proyecto se utilzo React por su flexibilidad, TypeScript para poder manejar correctamente
                        los datos, la libreria Zustand para manejar estados globales como la seccion de favoritos y el usuario conectado y
                        CSS, aplicando buenas practicas de arquitectura.

                    </p>
                </div>
                <div className={styles.objective}>
                    <h2>Objetivos</h2>
                    <p>
                        Mi objetivo con este proyecto fue aprender a crear una buena arquitectura del proyecto,
                        implementar rutas protegidas y mejorar la experiencia del usuario.
                    </p>
                </div>
            </section>
        </main>
    )
}