const ProfessionSingle = (props) => {
    const { img, text, title, order } = props.profSingleProps

    return (
        <div style={{ order }} className="w-[280px] h-[400px] flex-none rounded-lg overflow-hidden relative">
            <img src={ img } alt={ title } className="w-full h-full object-cover absolute top-0 left-0 z-0" />
            <div className="w-full h-full bg-[#00000099] z-[2] absolute top-0 left-0">
                <div className="w-[224px] absolute top-[32px] left-[28px] font-roboto leading-[140%] z-[2] text-left">
                    <h4 className="font-medium text-[2rem] text-white">
                        { title }
                    </h4>
                    <p className="text-[1.25rem] text-[#F6FFFF]">
                        { text }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfessionSingle