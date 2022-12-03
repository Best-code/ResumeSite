import Image from "next/image";

const AboutMe = () => {
    return (
        <div id="AboutMe" className="sm:pt-12 md:pt-18 lg:pt-24 bg-gray-800">
            <div className="sm:pb-12 sm:px-12 md:pb-18 md:px-18 lg:pb-20 lg:px-20 bg-gray-800">
                <div className="flex xl:flex-row flex-col w-full shadow-lg bg-white">
                    {/* Picture */}
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <div className="h-[35em] overflow-hidden bg-red-900">
                            <Image layout={'fill'} src={"/faceshot.jpg"} alt={"Picture of Colin Maloney"} />
                        </div>
                    </div>
                    {/*Picture End */}

                    <div className="flex flex-col gap-0 w-1/2 px-4 py-8 font-iceland">
                        <span className="text-5xl">
                            About Me
                        </span>
                        <div className="text-4xl">
                            <span>
                                Computer Science B.S. Major at Florida State University
                                with a passion for programming.
                            </span>
                            <br /><br /><br />
                            <span>
                                Interested in Web Development,
                                Game Development, Data Science, and Machine Learning.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
     //   </div>
    )
}

export default AboutMe;