import { useRouter } from "next/router";
import NavItem from "../NavItem";
const Navbar = () => {

    const router = useRouter();

    return (
        <div className="sticky top-0">

        <div className="flex w-full bg-[#222222] font-iceland px-24">
            <span className="text-white text-5xl">
                Colin Maloney
            </span>
            <div className="flex items-center justify-end w-full">
                <div className="text-center grid grid-cols-4 gap-32 text-white text-5xl">
                    <span />
                        <NavItem name="About Me" hashName="AboutMe"/>

                    <NavItem name="Projects" hashName="Projects"/>

                    <a href="mailto:colincpm@hotmail.com">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;