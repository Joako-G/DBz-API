import { Header } from './components/Header'
import styles from './App.module.css'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <AppRoutes />
    </div>
  )
}

export default App
