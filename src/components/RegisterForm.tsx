import { useId } from 'react'
import styles from './RegisterForm.module.css'
import type { User } from '../interfaces/user.type'
import { useNavigate } from 'react-router-dom'
import { newUsers } from '../services/serviceChar'
// import ModalDemo from "@/components/ui/modal-dialog";




export function RegisterForm() {
    const idName = useId()
    const idLastName = useId()
    const idUsername = useId()
    const idPassword = useId()
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const fromData = new FormData(event.currentTarget)

        let name = fromData.get(idName)?.toString()
        let lastName = fromData.get(idLastName)?.toString()
        let username = fromData.get(idUsername)?.toString()
        let password = fromData.get(idPassword)?.toString()

        if (name && lastName && username && password) {
            const newUser: User = {
                name: name,
                lastname: lastName,
                username: username,
                password: password,
                favorites: []
            }

            // AGREGAR MENSAJE DE RESPUESTA DE LA API
            await newUsers(newUser)
            navigate('/')
        }

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Crear cuenta</h1>
            <form onSubmit={handleSubmit} className={styles.form} role="search" action="">
                <div className={styles.infoUser}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <div className={styles.bgInput}>
                            <input type="text" name={idName} id='name' placeholder="Ingrese nombre" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastname">Apellido</label>
                        <div className={styles.bgInput}>
                            <input type="text" name={idLastName} id="lastname" placeholder="Ingrese apellido" />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <div className={styles.bgInput}>
                        <input type="text" placeholder="Nombre de usuario" name={idUsername} id="username" />
                    </div>
                </div>

                <div>
                    <label htmlFor="password">Contraseña</label>
                    <div className={styles.bgInput}>
                        <input type="password" placeholder="Contraseña" name={idPassword} id="password" />
                    </div>
                </div>

                <button className={styles.btnRegister}> Registrar</button>
            </form>
        </div>
    )
}