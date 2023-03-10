import ImgAndTextSection from "../components/ImgAndTextSection"
import artisans from "../assets/images/artisans.png"
import business from "../assets/images/business.png"
import ErrorBoundary from "../components/ErrorBoundary"

const artisanProps = {
    img: artisans,
    imgFirst: false,
    title: "SkillBridge for Skilled Artisans",
    text: "Providing a streamlined and efficient platform that connects skilled artisans with companies seeking their services, while prioritizing quality, reliability, and transparency."
}
const businessProps = {
    img: business,
    title: "SkillBridge for all Business",
    text: "Say goodbye to the hassle of finding the right talents and say hello to a simpler, more efficient way of getting the job done. Our website connects businesses with skilled artisans from various industries."
}

const AboutUs = () => {

    return (
        <section className="w-full flex flex-col gap-[6.875rem] py-10 mb-[6.5rem]">
            <ErrorBoundary>
                <ImgAndTextSection imgTextProps={ artisanProps } />
            </ErrorBoundary>
            <ErrorBoundary>
                <ImgAndTextSection imgTextProps={ businessProps } />
            </ErrorBoundary>
        </section>
    )
}

export default AboutUs