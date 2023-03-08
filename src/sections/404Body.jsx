import { Link } from "react-router-dom"
import errorRobot from "../assets/images/404.png"

const NoPageBody = () => {
    return (
        <section className="w-full min-h-noPage flex flex-col items-center justify-center font-roboto 
            font-medium text-center py-10"
        >
            <img src={ errorRobot } alt="Error Robot" className="w-full md:w-[500px]" />
            <h1 className="mt-[52px] mb-10 font-normal text-[2rem] leading-[2.375rem] text-[#717591]">
                Sorry. Page not found
            </h1>
            <p className="text-xl leading-6 text-[#A1A4B6]">
                The page you are looking for doesn't exist or another error occurred.
            </p>
            <p className="text-xl leading-6 text-[#D5D6DE]">
                Go back or head over to <Link href="#" className="underline">techmart.com</Link> to choose a new direction
            </p>
        </section>
    )
}

export default NoPageBody