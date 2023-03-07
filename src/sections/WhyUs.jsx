import WhyUsBox from "../components/WhyUsBox"
import quality from "../assets/images/quality.png"
import communication from "../assets/images/communication.png"
import payment from "../assets/images/payment.png"
import support from "../assets/images/support.png"
import { Link } from "react-router-dom"

const box1 = {
    img: quality,
    title: "Best Quality",
    text: "With the best quality and skilled artisans available."
}
const box2 = {
    img: communication,
    title: "Quick Communication",
    text: "Between business and artisans available with our seamless chat option."
}
const box3 = {
    img: payment,
    title: "Easy Payment",
    text: "Easy payment available convenient, fast and secured."
}
const box4 = {
    img: support,
    title: "24/7 Support",
    text: "",
    html: true
}

const WhyUs = () => {
    return (
        <section className="w-full px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px] bg-white my-[120px]">
            <div className="w-full">
                <h2 className="font-calisto font-bold text-[40px] leading-[64px] text-center">
                    Why <span className="text-blue"> SkillBridge?</span>
                </h2>
                <p className="font-roboto font-medium text-xl leading-[140%] text-center mb-9">
                    Keeping track of your ecommerce transactions has never been easier
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <WhyUsBox whyUsBoxProps={ box1 } />
                    <WhyUsBox whyUsBoxProps={ box2 } />
                    <WhyUsBox whyUsBoxProps={ box3 } />
                    <WhyUsBox whyUsBoxProps={ box4 }>
                        <p className="font-roboto text-xl leading-[140%] text-grey text-center">
                            Do you have a complaint? Fill this
                            <Link to="#" className="text-blue no-underline font-medium"> form </Link>
                            to get answers ASAP
                        </p>

                    </WhyUsBox>
                </div>
            </div>
        </section>
    )
}

export default WhyUs