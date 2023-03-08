import MainLayout from "../layout/MainLayout"
import Hero from "../components/Hero"
import WhyUs from "../sections/WhyUs"
import Clubs from "../sections/Clubs"
import AboutUs from "../sections/AboutUs"
import ErrorBoundary from "../components/ErrorBoundary"
import Reviews from "../sections/Reviews"

const Home = () => {
    return (
        <MainLayout>
            <ErrorBoundary>
                <Hero />
            </ErrorBoundary>
            <ErrorBoundary>
                <Clubs />
            </ErrorBoundary>
            <ErrorBoundary>
                <WhyUs />
            </ErrorBoundary>
            <ErrorBoundary>
                <AboutUs />
            </ErrorBoundary>
            <ErrorBoundary>
                <Reviews />
            </ErrorBoundary>
        </MainLayout>
    )
}

export default Home