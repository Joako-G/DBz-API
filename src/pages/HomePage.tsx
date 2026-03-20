import { Home } from "../components/Home";
import { SearchForm } from "../components/SearchForm";
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <main className={styles.container}>
            <SearchForm />
            <Home />
        </main>
    )
}