
import Image from "next/image"

const ViewComponent = (props) => {

    const DescLink = (props) => {
        if (props.descLink) {
            return <p>{props.beforeLink} <u><a href={props.descLink}>{props.linkName}</a>{props.afterLink}</u></p>
        }
    }


    return (
        <div className="flex flex-col bg-gray-700">
            <a href={props.link}>
                {/*Picture Here*/}
                    {/* <Image src={props.img} width={660} height={436} layout={"intrinsic"} /> */}
                    <Image src={props.img} width={1020} height={682} layout={"intrinsic"} />
            </a>
            <div className="p-6 flex flex-col">
                <span className="text-4xl">
                    {props.name}
                </span>
                <span className="text-2xl shadow-lg">
                    {props.description}
                    <DescLink descLink={props.descLink} beforeLink={props.beforeLink} afterLink={props.afterLink} linkName={props.linkName} />
                </span>
            </div>
        </div>
    )
}

export default ViewComponent;