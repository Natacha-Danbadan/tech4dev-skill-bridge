import { useState } from "react"
import * as DATA from "../data/data"
import helpers from "../helpers"
import ProfessionSingle from "../components/ProfessionSingle"
import uuid from "react-uuid"
import { CgChevronLeftO, CgChevronRightO } from "react-icons/cg"

const Professions = () => {
    let ordersObj = helpers.createOrderObj(DATA.PROFESSIONS.length)
    const [orders, setOrders] = useState(ordersObj)
    console.log(orders)
    const handlePrev = () => {
        setOrders(prevState => {
            let numsObj = {...prevState}
            for (let idx in numsObj) {
                let newNum = numsObj[idx] + 1 > DATA.PROFESSIONS.length ? 1 : numsObj[idx] + 1

                numsObj[idx] = newNum
            }

            return numsObj
        })
    }

    const handleNext = () => {
        setOrders(prevState => {
            let numsObj = {...prevState}
            for (let idx in numsObj) {
                let newNum = numsObj[idx] - 1 < 1 ? DATA.PROFESSIONS.length : numsObj[idx] - 1

                numsObj[idx] = newNum
            }

            return numsObj
        })
    }

    return (
        <section className="w-full bg-white px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px] py-5">
            <section className="w-full flex justify-between items-center font-roboto text-3xl text-center tet-dark relative">
                <button onClick={ handlePrev } className="absolute -left-[28px] lg:-left-[76px] z-[3]">
                    <CgChevronLeftO className="text-blue text-[36px]" />
                </button>
                <div className="w-full overflow-hidden">
                    <div className="w-max flex items-center gap-10 translate-x-[-8px]">
                        { DATA.PROFESSIONS.map((item,idx) => {
                            item.order = orders[idx + 1]
                            return <ProfessionSingle key={ uuid() } profSingleProps={ item } />
                        }) }
                    </div>
                </div>
                <button onClick={ handleNext } className="absolute -right-[28px] lg:-right-[76px] z-[3]">
                    <CgChevronRightO className="text-blue text-[36px]" />
                </button>
            </section>
        </section>
    )
}

export default Professions