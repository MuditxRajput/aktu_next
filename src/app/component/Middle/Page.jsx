"use client";
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
            className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600"
          >
            Previous Papers
          </button>

          {/* Ad between the second and third buttons */}
          

          <button
            className="bg-orange-600 rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-white hover:bg-black hover:shadow-md hover:shadow-orange-600"
          >
            Notes
          </button>
        </div>

        {/* Ad below the buttons */}
        <AdCode />
      </div>
    </>
  );
};

export default Middle;
