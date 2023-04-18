import "./Header.css"
import Caterlogo from "../images/cater-logo.png";


function Header() {
    return (


        <header id="header">
            {/* Top Nav  */}
            <div className="border-b flex items-center">


                <div className="container sm:px-6 !px-3 mx-auto flex flex-wrap items-center justify-between">
                    <div className="items-center gap-3 py-[10px] flex-wrap flex-wrap lg:flex">
                        <div className="flex items-start gap-2">

                            <i className="fa fa-map-marker text-[14px]"></i>
                            <p classname="text-[14px]">Neville Road, Bradford,BD4 8TU United Kingdom</p>
                        </div>
                        <div className="flex items-center gap-2">

                            <i className="fa fa-phone text-[14px]" aria-hidden="true"></i>
                            <h6 classname="text-[14px]">0044 1274 301910</h6>
                        </div>
                    </div>


                    <div className="flex items-center divide-x ml-auto justify-end">
                        <div>
                            <div className="flex items-center divide-x gap-x-3 style-1">


                                <a href="https://sale.cater-choice.com/customer/register"
                                    className="text-[14px] flex items-center gap-2 py-[10px] hover:text-[#ce1212] style">
                                    <i className="fa fa-user-plus" aria-hidden="true"></i> Register
                                </a>

                                <a href="https://sale.cater-choice.com/customer/login"
                                    className="text-[14px] flex items-center gap-2 py-[10px] hover:text-[#ce1212] pl-3 style">
                                    <i className="fa fa-user" aria-hidden="true"></i> Login
                                </a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            {/* Top Nav-end */}
            {/* Main Nav */}
            <div className="container flex items-center justify-between py-[20px]">
                <div className="flex items-center sm:gap-3 gap-2">
                    <button type="button" className="btn lg:hidden w-[35px] h-[35px] bg-[#ce1212]/10 rounded-full flex items-center justify-center relative" data-bs-target="#mobile-menu">
                        <i className="fa fa-bars text-[18px] text-[#ce1212]" aria-hidden="true"></i>
                    </button>

                    <button type="button" className="btn lg:hidden w-[35px] h-[35px] bg-[#ce1212]/10 rounded-full flex items-center justify-center relative" data-bs-target="#mobile-menu">
                        <i className="fa fa-search text-[18px] text-[#ce1212]"></i>
                    </button>
                </div>
                <a href="/" className="flex items-center lg:relative absolute lg:left-0 left-1/2 transform lg:translate-x-0 -translate-x-[50%]">
                    <img src={Caterlogo} className="sm:w-[170px] w-[150px]" alt=""></img>
                </a>
                <div className="lg:w-5/12 mx-auto">
                    <form action="https://sale.cater-choice.com/product/search" method="GET">
                        <div className="h-[48px] rounded-[45px] border-[1px] border-[#ce1212] flex items-center style-3">
                            <input type="search" name="search" placeholder="Search" className="w-full p-[14px_20px] rounded-l-[45px] h-full focus-visible:outline-0 style-4"/>
                            <button className="p-[0_16px] text-[18px] bg-[#ce1212] rounded-r-[45px] h-full text-[18px]" type="submit">
                                <i className="fa fa-search" color="#fff"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="lg:w-2/12 md:w-3/12 w-full">
                    <div className="flex items-center justify-end gap-3 style-2">
                        <div className="group-relative">
                            <a href="/" className="w-[35px] h-[35px] bg-[#ce1212]/10 rounded-full flex items-center justify-center relative">
                                <i className="fa fa-heart-o text-[#ce1212] fonts"></i>
                                <span className="absolute -top-3 -right-2 w-[22px] h-[22px] bg-[#ce1212] text-white rounded-full flex items-center justify-center text-[10px]">0</span>
                            </a>
                        </div>
                        <div className="group-relative">
                            <a href="/" className="w-[35px] h-[35px] bg-[#ce1212]/10 rounded-full flex items-center justify-center relative">
                                <i className="fa fa-shopping-cart text-[#ce1212]"></i>
                                <span className="absolute -top-3 -right-2 w-[22px] h-[22px] bg-[#ce1212] text-white rounded-full flex items-center justify-center text-[10px]">0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Nav end */}
        </header>
    );
}
export default Header;