const ImgAndTextSection = (props) => {
    const {
        img,
        imgFirst = true,
        alignCenter = true,
        rounded = true,
        regularText = true,
        title = "",
        text = ""
    } = props.imgTextProps

    return (
        <section className={`w-full flex flex-col gap-[60px] ${alignCenter? "items-center" : "" }
            ${imgFirst ? "lg:flex-row" : "lg:flex-row-reverse"} px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px]`}
        >
            <div className="w-full lg:w-[51%] flex flex-none justify-center">
                <img src={ img } alt="section-img" 
                    className={`${rounded ? "rounded-lg" : ""} w-full`}
                />
            </div>
            <div className="w-full flex-grow">
                { regularText ? (
                    <div>
                        <h2 className="font-calisto font-bold text-5xl leading-[57px] text-blue text-justify mb-3">
                            { title }
                        </h2>
                        <p className="font-roboto text-2xl leading-[34px] text-dark text-justify">
                            { text }
                        </p>
                    </div>
                ) : (
                    <div>
                        { props.children }
                    </div>
                )}
            </div>
        </section>
    )
}

export default ImgAndTextSection