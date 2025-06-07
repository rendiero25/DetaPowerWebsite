import { IoHomeSharp } from "react-icons/io5";

const Breadcrumbs = ({linktopage, pagename}) => {
    return(
        <div className="bg-gray-200 h-11 flex flex-row justify-start items-center gap-1 px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
            <IoHomeSharp className="size-3"/>
            <a href="/" className="font-normal text-sm">Homepage</a>
            <h5>&gt;</h5>
            <a href={linktopage} className="font-normal text-sm">{pagename}</a>
        </div>
    )
}

export default Breadcrumbs;