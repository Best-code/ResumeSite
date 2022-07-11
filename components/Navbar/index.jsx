const Navbar = () => {
    return (
        <div className="flex w-full bg-[#222222] font-iceland px-24">
            <span className="text-white text-5xl">
                Colin Maloney
            </span>
            <div className="flex items-center justify-end w-full">
                <div className="text-center grid grid-cols-4 gap-32 text-white text-5xl">
                    <span/>
                    <span> 
                        About Me
                    </span>

                    <span>
                        Projects
                    </span>

                    <span>
                        Contact Me
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;