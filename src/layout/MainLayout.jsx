import ErrorBoundary from "../components/ErrorBoundary"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

const MainLayout = (props) => {
    return (
        <div>
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>
            <main>
                { props.children }
            </main>
            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </div>
    )
}

export default MainLayout