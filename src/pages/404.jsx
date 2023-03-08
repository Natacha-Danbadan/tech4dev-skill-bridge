import Header from "../sections/Header"
import NoPageBody from "../sections/404Body"
import ErrorBoundary from "../components/ErrorBoundary"

const NoPage = () => {
    return (
        <div>
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>
            <ErrorBoundary>
                <NoPageBody />
            </ErrorBoundary>
        </div>
    )
}

export default NoPage