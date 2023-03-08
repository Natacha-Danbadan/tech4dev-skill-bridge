const Input = (props) => {
    const {
        type = "text",
        name,
        label = "",
        value,
        placeholder = "",
        required = true,
        handleInputChange = () => {},
        bdr = true,
        fntWght = "extralight",
        col = "very dark"
    } = props.inputProps

    let borders = bdr ? "border-2 border-[#A1A4B6]" : "border-none"
    let fontWeight = fntWght === "extralight" ? "font-extralight" : "font-normal"
    let color = col === "very dark" ? "text-black placeholder:text-[#00000070]" : "text-dark placeholder:text-dark70"

    return (
        <label className="font-roboto text-[16px]">
            { label ? <span className="leading-[18px] mb-[8px] text-dark">{ label }</span> : null }
            <input type={ type } onChange={ (e) => handleInputChange(e) } required={ required } value={ value }
                placeholder={ placeholder } name={ name }
                className={`w-full rounded-lg outline-none bg-textWhite p-[20px] leading-[22px]
                ${borders} ${fontWeight} ${color}`}
            />
        </label>
    )
}

export default Input