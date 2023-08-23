import { Inter } from 'next/font/google'
import Header from './components/header'
import Body from './components/body'
import Footer from "./components/footer"
import styles from "styles/components/index.module.css"

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
  <>
  <div className={styles.index_parent}>
  <div className={styles.home_parent}>
    <Header></Header>
    <Body></Body>
    </div>
    <div className={styles.footer}>
    <Footer></Footer>
    </div>
    </div>
  </>
    )
}

export default Home;

