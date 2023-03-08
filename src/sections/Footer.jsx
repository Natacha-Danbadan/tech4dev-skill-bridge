import { Link } from "react-router-dom"
import whatsapp from "../assets/images/whatsapp.svg"
import call from "../assets/images/call.svg"
import arrowUp from "../assets/images/arrow-up.svg"

const Footer = () => {
    const backToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <footer className="w-full px-7 md:px-14 lg:px-16 xl:px-24 xxl:px-[120px] bg-dark">
            <section className="w-full font-roboto justify-between pb-[42px] font-medium text-xl
                grid grid-cols-[auto] md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] leading-[1.5rem]"
            >
                <div className="w-fit text-textWhite60 pt-[76px]">
                    <h6 className="text-white mb-9">Links</h6>
                    <ul className="flex flex-col gap-[2.375rem]">
                        <li>
                            <Link to="#">
                                <p className="hover:text-white">FAQs</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <p className="hover:text-white">About Us</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-fit text-textWhite60 pt-[76px]">
                    <h6 className="text-white mb-9">Get Help</h6>
                    <ul className="flex flex-col gap-[2.375rem]">
                        <li>
                            <Link to="#">
                                <p className="hover:text-white">Support(support@skillbridge.com)</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <p className="hover:text-white">Blog</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-fit text-textWhite60 pt-[76px]">
                    <h6 className="text-white mb-9">Privacy</h6>
                    <ul className="flex flex-col gap-[2.375rem]">
                        <li>
                            <Link to="#">
                                <p className="hover:text-white">Privacy Policy</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <p className="hover:text-white">Terms and Conditions</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-fit text-textWhite60 pt-[76px]">
                    <h6 className="text-white mb-9">Contact Us</h6>
                    <p className="mb-[30px]">Lagos, Nigeria</p>
                    <ul className="flex flex-col gap-[1rem]">
                        <li>
                            <Link to="#">
                                <div className="flex gap-4 items-center">
                                    <div className="w-9 h-9 bg-white flex justify-center items-center rounded-full">
                                        <img src={ whatsapp } alt="w" />
                                    </div>
                                    <p className="hover:text-white">08123456789</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="flex gap-4 items-center">
                                    <div className="w-9 h-9 bg-white flex justify-center items-center rounded-full">
                                        <img src={ call } alt="p" />
                                    </div>
                                    <p className="hover:text-white">08123456789</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <button type="button" onClick={backToTop} className="flex gap-2 items-center bg-transparent
                                outline-none border-none hover:text-white"
                            >
                                <img src={ arrowUp } alt="A" />
                                <p>Back to top</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-full font-gabriela text-white border-t border-white pt-[14px] pb-[30px] 
                flex justify-center items-center gap-2"
            >
                <p className="text-[2rem] translate-y-[2px] pt-2 -pb-2 leading-6">&copy;</p>
                <p className="font-medium text-xl leading-6"><span className="font-roboto">2023</span> SkillBridge</p>
            </section>
        </footer>
    )
}

export default Footer