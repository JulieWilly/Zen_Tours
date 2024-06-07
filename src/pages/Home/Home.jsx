import './home.css'
import Heros from './Heros'
import About from './About'
import Header from '../../components/Header'
import PopularDestinations from './PopularDestinations'

const Home = () => {
    return <>
    <Heros/>
    {/* <Header/> */}
    <About/>
    <PopularDestinations/>
    </>
}

export default Home