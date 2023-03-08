import Button from "../components/Button"
import ErrorBoundary from "../components/ErrorBoundary"
import { RxCaretRight } from "react-icons/rx"
import client1 from "../assets/images/client1.png"
import client2 from "../assets/images/client2.png"
import client3 from "../assets/images/client3.png"
import client4 from "../assets/images/client4.png"
import ReviewSingle from "../components/ReviewSingle"

const Reviews = () => {
    const buttonProps = {
        href: "#",
        text: "See More",
    }
    const review1 = {
        img: client1,
        name: "Ade Aderin",
        position: "Recruitment Manager",
        rating: 4
    }
    const review2 = {
        img: client2,
        name: "Wilson Devin",
        position: "CEO of Atlas",
        rating: 4.5
    }
    const review3 = {
        img: client3,
        name: "Ify Johnson",
        position: "MD of Ify and Co.",
        rating: 5
    }
    const review4 = {
        img: client4,
        name: "Michael Dave",
        position: "CEO of Eros",
        rating: 3.8
    }

    return (
        <section className="w-full text-center px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px] pt-[6.5rem] pb-[5rem]">
            <h2 className="font-calisto font-bold text-[2.5rem] leading-[3rem] text-black">
                Client <span className="text-blue"> Reviews</span>
            </h2>
            <p className="font-roboto text-xl text-[#00000070] mt-[4px]">
                Hear from our Clients on how SkillBridge has helped their businesses
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch mt-[40px] mb-[48px]">
                <ErrorBoundary>
                    <ReviewSingle reviewSingleProps={review1} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ReviewSingle reviewSingleProps={review2} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ReviewSingle reviewSingleProps={review3} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ReviewSingle reviewSingleProps={review4} />
                </ErrorBoundary>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[300px] md:w-[360px]">
                    <ErrorBoundary>
                        <Button buttonProps={buttonProps}>
                            <RxCaretRight className="text-[20px] leading-[24px] font-medium text-white" />
                        </Button>
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    )
}

export default Reviews