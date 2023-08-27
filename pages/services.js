import { Inter } from 'next/font/google'
import Header from './components/header'
import Services from "./components/services"
import Footer from "./components/footer"

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
  <>
    <Header></Header>
    <Services></Services>
    <Footer></Footer>
  </>
    )
}

export default Home;

