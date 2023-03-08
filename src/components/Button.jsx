import { Link } from "react-router-dom"

const Button = (props) => {
    const {
        type = "button", 
        href = "",
        bg = "blue",
        bdr = false,
        bdrCol = "blue",
        col = "white",
        text = "",
        wid = "full",
        py = "sm",
        handleClick = () => {},
        // handleSubmit = () => {}
    } = props.buttonProps

    const background = bg === "blue" ? "bg-blue" : "bg-white"
    const border = bdr ? "border-2" : ""
    const borderColor = bdrCol === "blue" ? "border-blue" : "border-white"
    const textColor = col === "white" ? "text-white" : "text-blue"
    const width = wid === "full" ? "w-full" : "w-max"
    const paddingY = py === "sm" ? "py-4" : "py-[18px]"

    if (href) {
        return (
            <Link to={href}>
                <div className={`${background} ${border} ${borderColor} ${textColor} ${width} ${paddingY} 
                    px-6 text-[20px] leading-[24px] font-medium font-roboto rounded-lg outline-none gap-2
                    active:scale-[98%] hover:scale-[101%] focus:scale-[102%] no-underline text-center flex
                    items-center justify-center`}
                >
                    <p>{ text }</p>
                    { props.children ? props.children : null }
                </div>
            </Link>
        )
    }

    if (type === "submit") {
        return (
            <button type={type} 
                // onSubmit={ (e) => handleSubmit(e) }
                className={`${background} ${border} ${borderColor} ${textColor} ${width} ${paddingY} px-6 
                text-[20px] leading-[24px] font-medium font-roboto rounded-lg outline-none active:scale-[98%] 
                hover:scale-[101%] focus:scale-[101%] flex justify-center gap-2 items-center flex-grow flex-shrink-0`}
            >
                <p>{ text }</p>
                { props.children ? props.children : null }
            </button>
        )
    }

    return (
        <button type={type} onClick={ handleClick }
            className={`${background} ${border} ${borderColor} ${textColor} ${width} ${paddingY} px-6 
            text-[20px] leading-[24px] font-medium font-roboto rounded-lg outline-none active:scale-[98%] 
            hover:scale-[101%] focus:scale-[101%] flex justify-center gap-2 items-center flex-grow flex-shrink-0`}
        >
            <p>{ text }</p>
            { props.children ? props.children : null }
        </button>
    )
}

export default Button