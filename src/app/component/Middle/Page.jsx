"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdCode from '../AdCode';
const Middle = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 sm:mt-0">
        {/* Ad above the buttons */}
       

        <div className="flex flex-col sm:flex-row gap-7 sm:gap-16 mt-4">
          <button
            onClick={() => router.push("/component/Quantum")}
            className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600"
          >
            Quantum
          </button>

          {/* Ad between the first and second buttons */}
        

          <button
          onClick={()=>router.push("/YearSection/PreviousYear")}
            className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600"
          >
            Previous Papers
          </button>
          {/* <Link href={"https://www.aitohumantextconvertor.online/components/Papers"} className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600">
          Previous Year
          </Link> */}

          {/* Ad between the second and third buttons */}
          

          <Link
            href={("https://whatsapp.com/channel/0029VaxdbZsJENxv3duV8b31")}
            className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600"
          >
            Entry Level Jobs
          </Link>
        </div>

        {/* Ad below the buttons */}
        <AdCode />
      </div>
    </>
  );
};

export default Middle;
