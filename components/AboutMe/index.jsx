import { WhiteSeperator } from "../seperators";

const AboutMe = () => {
    return (
        <div id="AboutMe" className="py-28 px-24">
            <div className="flex w-full shadow-lg">
                {/* Picture */}
                <div className="w-1/2 h-[32em] bg-red-900 overflow-hidden">
                    <img width="100%" src="/faceshot.jpg" alt="Picture of Colin Maloney"/>
                </div>
                {/*Picture End */}

                <div className="flex flex-col gap-0 w-1/2 px-12 py-8 font-iceland">
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
    )
}

export default AboutMe;