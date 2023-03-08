import { useState } from "react"
import { RxCaretRight } from "react-icons/rx"
import Button from "../components/Button"
import ErrorBoundary from "../components/ErrorBoundary"
import Input from "../components/Input"


const Newsletter = () => {
    const [inputValues, setInputValues] = useState({ name: "", email: "" })

    const handleInputChange = (e) => {
        let value = e.target.value, name = e.target.name

        setInputValues((prevState) => {
            return { ...prevState, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }

    const buttonProps = {
        text: "Subscribe Now",
        type: "submit",
        handleSubmit
    }

    const nameProps = {
        value: inputValues.name,
        name: "name",
        placeholder: "Enter your full name",
        handleInputChange,
        bdr: false,
        fntWght: "normal",
        col: "dark"
    }

    const emailProps = {
        type: "email",
        name: "email",
        value: inputValues.email,
        placeholder: "Enter your email address",
        handleInputChange,
        bdr: false,
        fntWght: "normal",
        col: "dark"
    }

    return (
        <section className="w-full px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px]">
            <form onSubmit={(e) => handleSubmit(e)} method="POST"
                className="w-full bg-deepBlue flex flex-col lg:flex-row gap-14 pt-[5rem] pb-[4.5rem]
                px-7 md:px-14 lg:px-16 xxl:px-20 lg:items-stretch"
            >
                <div className="w-full block lg:hidden order-1 lg:order-3">
                    <h2 className="font-calisto font-bold text-[3rem] leading-[3.5rem] text-textWhite">
                        Stay up-to-date
                    </h2>
                    <p className="font-roboto font-medium text-xl leading-[140%] text-textWhite opacity-90 mt-[14px] mb-[18px]">
                        Sign up for our newsletter to recieve awesome discounts and exciting news.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 order-3 lg:order-1">
                    <div className="w-full hidden lg:block">
                        <h2 className="font-calisto font-bold text-[3rem] leading-[3.5rem] text-textWhite">
                            Stay up-to-date
                        </h2>
                        <p className="font-roboto font-medium text-xl leading-[140%] text-textWhite opacity-90 mt-[14px] mb-[18px]">
                            Sign up for our newsletter to recieve awesome discounts and exciting news.
                        </p>
                    </div>
                    <div>
                        <ErrorBoundary>
                            <Button buttonProps={buttonProps}>
                                <RxCaretRight className="text-[20px] leading-[24px] font-medium text-white" />
                            </Button>
                        </ErrorBoundary>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 order-2 flex flex-col justify-end gap-[16px]">
                    <ErrorBoundary>
                        <Input inputProps={ nameProps } />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Input inputProps={ emailProps } />
                    </ErrorBoundary>
                </div>
            </form>
        </section>
    )
}

export default Newsletter