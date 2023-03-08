import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import helpers from "../helpers"

const ReviewStars = ({ rating }) => {
    const starArr = helpers.getStarArr(rating)

    return (
        <div className="w-fit flex flex-none">
            { starArr.map((num) => {
                let element = <></>

                if (num === 1) {
                    element = <BsStarFill className="text-[20px] leading-[20px] text-gold" />
                } else if (num === 0.5) {
                    element = <BsStarHalf className="text-[20px] leading-[20px] text-gold" />
                } else if (num === 0) {
                    element = <BsStar className="text-[20px] leading-[20px] text-gold" />
                }

                return element
            })}
        </div>
    )
}

export default ReviewStars