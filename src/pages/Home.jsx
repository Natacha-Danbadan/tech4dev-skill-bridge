import MainLayout from "../layout/MainLayout"
import Hero from "../components/Hero"
import WhyUs from "../sections/WhyUs"
import Clubs from "../sections/Clubs"
import AboutUs from "../sections/AboutUs"

const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <Clubs />
            <WhyUs />
            <AboutUs />
        </MainLayout>
    )
}

export default Home