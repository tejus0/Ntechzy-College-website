import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import logo from "../../../assets/logo.webp"

const NavBar2 = () => {
    return (
        <header>
            <div className="nav-area h-24 flex items-center justify-center max-w-[1200px] m-[0_auto] p-[10px_20px]">
                <Link to="/" className="logo">
                    <img className="nav-logo" src={logo} alt="logo" />
                </Link>

                {/* for large screens */}
                <DesktopNav />

                {/* for small screens */}
                <MobileNav />
            </div>
        </header>
    );
};

export default NavBar2;