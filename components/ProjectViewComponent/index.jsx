
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
                <div className="w-full bg-red-900">
                    {/*<Image src={props.img} width={660} height={436} layout={"intrinsic"} />*/}
                    <img src={props.img} height="0" />
                </div>
            </a>
            <div className="p-12 flex flex-col">
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