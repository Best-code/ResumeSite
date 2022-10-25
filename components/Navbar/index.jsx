import { useRouter } from "next/router";
import NavItem from "../NavItem";
const Navbar = () => {

    const router = useRouter();

    return (
        <div className="sticky top-0">

        <div className="flex w-full bg-[#222222] font-iceland sm:px-12 md:px-16 lg:px-24">
            <span className="text-white text-5xl">
                Colin Maloney
            </span>
            <div className="flex items-center justify-end w-full">
                <div className="text-center grid md:grid-cols-4 md:gap-32 text-white text-xl md:text-2xl lg:text-4xl xl:text-5xl">
                    <span />
                        <NavItem name="About Me" hashName="AboutMe"/>

                    <NavItem name="Projects" hashName="Projects"/>

                    <a href="mailto:colincpm@hotmail.com?subject=Contact me: Resume Site">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;