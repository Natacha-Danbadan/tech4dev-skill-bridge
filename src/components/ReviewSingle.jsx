import play from "../assets/images/play.png"
import ReviewStars from "./ReviewStars"

const ReviewSingle = (props) => {
    const { img, name, position, rating } = props.reviewSingleProps

    return (
        <div className="w-full h-full font-roboto text-[20px] leading-[28px] border-[1.5] border-neutralBlue 
            rounded-lg overflow-hidden"
        >
            <div className="w-full aspect-[1.33] overflow-hidden relative">
                <img src={ img } alt="reviewer" className="w-full object-cover" />
                <button className="w-fit flex items-center gap-2 absolute bottom-[30px] right-[16px] bg-transparent
                    outline-none border-none"
                >
                    <p className="text-white">Watch Video</p>
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                        <img src={ play } alt="play" className="w-6" />
                    </div>
                </button>
            </div>
            <div className="w-full bg-lightBlue p-6">
                <div className="w-full flex xl:flex-col-reverse xxl:flex-row justify-between gap-2 items-center mb-[10px]
                    xl:items-start xxl:items-center"
                >
                    <h6 className="font-medium leading-[24px] text-dark">
                        { name }
                    </h6>
                    <ReviewStars rating={rating} />
                </div>
                <p className="leading-[24px] text-grey text-left">
                    { position }
                </p>
            </div>
        </div>
    )
}

export default ReviewSingle