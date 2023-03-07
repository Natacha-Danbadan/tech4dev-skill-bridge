const WhyUsBox = (props) => {
    const {img, title, text, html = false} = props.whyUsBoxProps

    return (
        <div className="w-full pt-9 pb-6 px-6 lg:px-3 flex flex-col items-center bg-lightBlue rounded-lg">
            <img src={ img } alt="I" className="" />
            <h5 className="font-roboto font-semibold text-xl text-dark mt-4 mb-2">
                { title }
            </h5>
            { html ? (
                <div className="w-full">
                    { props.children }
                </div>
            ) : (
                <p className="font-roboto text-xl leading-[140%] text-grey text-center">
                    { text }
                </p>
            )}
        </div>
    )
}

export default WhyUsBox