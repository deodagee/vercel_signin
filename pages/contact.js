import { Inter } from 'next/font/google'
import Header from './components/header'
import Contact from './components/contact'
import Footer from "./components/footer"
import styles from "../styles/components/contact.module.css"


const inter = Inter({ subsets: ['latin'] })

function Home() {
    return (
        <>

            <Header
            ></Header>

            <div className={styles.contact_parent}>
                <Contact></Contact>
            </div>


<div className={styles.contact_footer}>

            <Footer></Footer>
            </div>


        </>
    )
}

export default Home;

