import { WhiteSeperator } from "../seperators"
import ViewComponent from "../ProjectViewComponent";
const Projects = () => {
    return (
        <div id="Projects" className="bg-black font-iceland text-white">
            <WhiteSeperator />
            <div className="sm:px-12 md:px-18 lg:px-24 sm:py-6 lg:py-12 lg:pb-24">
                <div className="flex flex-col">
                    <span className="text-5xl">
                        Projects
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 xl:grid-cols-3 xl:gap-x-8 gap-y-12 pt-4">
                        <ViewComponent img="/kilpatrickss.png" name="Mrs. Kilpatricks Website" 
                        description={`Mrs. Kilpatrick was my highschool physics teacher. 
                        When I saw her original teacher site, I knew I had to help.
                        I developed her a new website using Next JS, Prisma, and Tailwind.`}
                            link="https://kilpatty.vercel.app" beforeLink="Original teacher 
                            site can be found " descLink="https://kilpatrickscience.com" 
                            linkName="here" afterLink="."/>

                        <ViewComponent img="/faceshot.jpg" name="Resume" description="I invite you to look at my Software Engineer / Data Scientist resume" link="/ColinMaloneyF2022ResumeV7.pdf" beforeLink="Check out my resume" descLink="/ColinMaloneyF2022ResumeV7.pdf" linkName="here" afterLink="."/>

                        <ViewComponent img="/youtubelogo.png" name="YouTube" description="Check out some of my content on YouTube! I like to make short skits and look forward to branching out in the future." link="https://youtube.com/@pmelons" beforeLink="Check out my YouTube" descLink="https://youtube.com/@pmelons" linkName="here" afterLink="."/>

                        <ViewComponent img="/Substack.jpg" name="Newsletter" 
                        description="With the help of Substack, I have started a newsletter. My articles are focused on helping myself become a better writer, and helping the reader to become a better person." 
                        link="https://colinmaloney.substack.com" beforeLink="Check out my Substack"
                         descLink="https://colinmaloney.substack.com" linkName="here" afterLink="."/>

                        <ViewComponent img="/GitHub-logo.jpg" name="Github" description="I have been a developer on
                         Github for many years and would love to share my many 
                        repositories created over the years." link="https://github.com/best-code" 
                        beforeLink="Check out my github" descLink="https://github.com/best-code" 
                        linkName="here" afterLink="."/>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;