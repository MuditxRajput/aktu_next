"use client"
import { useRouter } from "next/navigation";
import { default as AdCode } from "../AdCode";
const Middle = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-center items-center flex-col ">
      <div>
       <AdCode/>
        
      </div>
        <div className="flex gap-7 sm:gap-16">
            <button onClick={()=>router.push("/component/Quantum")} className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600 ">Quantum</button>
            <button className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600 ">Previous Papers</button>
            <button className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600 ">Notes</button>
        </div>
        <div>
        <AdCode/>
      </div>
    </div>
  )
}

export default Middle