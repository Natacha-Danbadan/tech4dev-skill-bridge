import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import { CgMenuRight, CgClose } from "react-icons/cg"
import Modal from "../components/Modal"

const Header = () => {
    // state to manage toggling the mobile menu
    const [menuActive, setMenuActive] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const modalProps = { setModalOpen, modalType: "menu", menuActive, setMenuActive }
    const buttonProps = {
        href: "#",
        text: "Get Started",
        wid: "fit",
        py: "lg",
    }

    const handleOpenMenu = () => {
        console.log("open")
        setModalOpen(true)
    }
    const handleCloseMenu = () => {
        setMenuActive(false)
        setTimeout(() => {
            setModalOpen(false)
        }, 350)
    }

    return (
        <header className="w-full px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px] py-8 bg-lightBlue 
            flex justify-between items-center relative"
        >
            <Link to="/">
                <p className="font-gabriela text-[32px] leading-[41px] text-blue">SkillBridge</p>
            </Link>

            <nav className="hidden lg:block">
                <ul className="list-style-none flex gap-10 font-roboto font-medium text-xl leading-[24px]">
                    <li>
                        <Link to="/">
                            <p className="text-dark">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p className="text-lightGrey hover:text-dark">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p className="text-lightGrey hover:text-dark">FAQs</p>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="hidden lg:flex gap-6 items-center">
                <Link to="/login">
                    <p className="font-roboto text-blue font-medium text-xl leading-[24px] hover:underline">Log In</p>
                </Link>
                <Button buttonProps={buttonProps} />
            </div>

            <div className="block lg:hidden z-[51]">
                { menuActive ? (
                    <CgClose onClick={handleCloseMenu} className="text-red-600 text-3xl leading-[100%]" />
                ) : (
                    <CgMenuRight onClick={handleOpenMenu} className="text-blue text-3xl leading-[100%]" />
                )}
            </div>


            { modalOpen ? (
                <Modal modalProps={modalProps}>
                    <div className={`block lg:hidden w-full h-full overflow-y-scroll pt-8`}>

                    </div>
                </Modal>
            ) : null
            }
        </header>
    )
}

export default Header