import Dashboard from "@/components/Dasboard";
import useCurrentUser from "@/hooks/useCurrentUser";
import useSubjects from "@/hooks/useSubjects";
import clsx from "clsx";
import Link from "next/link";
import style from "@/public/font.module.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const documents = () => {
    const {data:currentUser} = useCurrentUser();
    const {data:subjects} = useSubjects();

    return ( 
        <div className="w-screen h-screen flex">   
            <div className="w-[20%]">
                <Dashboard active="Documents" user={currentUser}/>
            </div>
            <div className="w-[80%] h-full bg-[#D9D9D9] p-32 flex flex-col items-center">
                <div className="grid grid-cols-3  gap-8">
                    {subjects?.map((subject:any)=>(
                    <Link
                    href={`/documents/${subject?.id}`}
                    key={subject?.id} className={clsx(style.wrapper,"bg-white rounded-lg w-[18vw] h-[13vw] p-4",
                    "cursor-pointer hover:bg-gray-100 flex flex-col justify-between")}>
                        <div className="flex justify-between">
                            <h2 className={clsx(style.poppins,"font-[600] max-w-[90%] line-clamp-4")}>{subject?.title}</h2>
                        </div>
                        <div className="text-[#8B8B8B] font-[300] line-clamp-1">{subject?.stage - 1} / 22 Files Available</div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
                  
     );
}
 
export default documents;