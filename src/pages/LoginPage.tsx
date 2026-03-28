import { FormLogin } from "../components/FormLogin";
import styles from './LoginPage.module.css'

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <FormLogin />
        </div>
    )
}