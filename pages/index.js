import { Inter } from 'next/font/google'
import Header from './components/header'
import Body from "./components/body"
import Footer from "./components/footer"

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
  <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </>
    )
}

export default Home;

