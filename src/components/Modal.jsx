import { useEffect } from "react"

const Modal = (props) => {
    const {setModalOpen, modalType = "regular", menuActive = false, setMenuActive = () => {}} = props.modalProps

    const handleModalClick = () => {
        if (modalType === "regular") setModalOpen(false)
        else if (modalType === "menu") {
            setMenuActive(false)
            setTimeout(() => {
                setModalOpen(false)
            }, 350)
        }
    }

    useEffect(() => {
        if (modalType === "menu") {
            setTimeout(() => {
                setMenuActive(true)
            }, 50)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000099] z-50">
            <div onClick={handleModalClick} className="w-full h-full flex relative justify-center items-center">
                { modalType === "menu" ? (
                    <div className={`absolute ${ menuActive ? "translate-x-0" : "-translate-x-[250px]" } w-[250px] 
                        h-full bg-white transition-all duration-300 top-0 left-0`}
                    >
                        { props.children }
                    </div>
                ) : (
                    <div className="">
                        { props.children }
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Modal