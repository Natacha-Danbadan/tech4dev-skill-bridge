import heroImg from "../assets/images/hero-pic.png"
import whiteCurve from "../assets/images/hero-bg.png"
import Button from "./Button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Hero = () => {
    const [positionRight, setPositionRight] = useState(0)
    const [screenWidth, setScreenWidth] = useState(0)

    const updateScreenWidth = () => setScreenWidth(window.innerWidth)
    console.log(positionRight)
    useEffect(() => {
        window.addEventListener("resize", updateScreenWidth)
        return () => window.removeEventListener("resize", updateScreenWidth)
    }, [])

    useEffect(() => {
        let width = 0
        if (screenWidth >= 992 && screenWidth < 1200) {
            width = 0 - (screenWidth * 0.28)
        } else if (screenWidth >= 1200 && screenWidth < 1440) {
            width = 0 - (screenWidth * 0.15)
        } else if (screenWidth >= 1440) {
            width = 0 - (screenWidth * 0.01)
        }
        setPositionRight(width)
    }, [screenWidth])

    const buttonProps = {
        href: "#",
        text: "Hire Top Artisans",
        wid: "full",
        py: "lg",
    }

    return (
        <section className="w-full relative bg-lightBlue px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px]
            flex flex-col lg:flex-row items-stretch justify-between z-0 overflow-hidden"
        >
            <div className="w-full lg:w-[690px] flex-shrink flex items-center mt-10 lg:mt-0">
                <div className="w-full">
                    <h1 className="font-calisto font-bold text-[60px] leading-[71px] text-black lg:text-justify mb-5 lg:mb-0">
                        {/* Find the Perfect Skilled Artisans for your Business */}
                        Find the Perfect <span className="text-blue">Skilled Artisans </span> for your 
                        <span className="text-blue"> Business</span>
                    </h1>
                    <p className="font-roboto font-medium text-2xl leading-[140%] text-[#46464670] lg:text-justify">
                        We aim to bridge the gap between skilled Artisans and Businesses.
                        Hire the best Artisans near you
                    </p>
                    <div className="flex gap-9 items-center mt-6">
                        <div className="w-[290px] flex">
                            <Button buttonProps={buttonProps} />
                        </div>
                        <Link to="/login">
                            <p className="font-roboto text-blue font-medium text-xl leading-[24px] hover:underline">Log In</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-fit flex justify-center flex-none mt-10 lg:mt-0 z-[2]">
                <img src={ heroImg } alt="" className="aspect-[0.824] w-4/5 md:w-[400px] lg:w-[350px] 
                    xl:w-[400px] xxl:w-[500px] z-[3]" 
                />
            </div>
            <img src={ whiteCurve } alt="curve" className={`absolute bottom-0 z-[1] hidden lg:block`}
                style={{ right: positionRight }}
            />
        </section>
    )
}

export default Hero