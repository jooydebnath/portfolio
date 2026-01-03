"use client"

import { useRouter } from "next/navigation"
import { IoMdHome } from "react-icons/io";

const BackButton = () => {
    const router = useRouter();
    const handleBack = () =>{
        router.push("/");
    }
    return (
        <div className="flex justify-center fixed top-4">
            <button className="text-header bg-card-background rounded-full p-2 bg-linear-to-r hover:scale-[103%] duration-300 transition-all from-purple-500 to-blue-500" onClick={handleBack}>
                <IoMdHome size={40}/>
            </button>
        </div>
    )
}

export default BackButton
