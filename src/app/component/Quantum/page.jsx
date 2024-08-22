"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import pdf from '../../Image/pdf.png';
import listOfQuantum from "../../utils/quantum";
import AdCode from "../AdCode";
import Search from "../Search/Page";

const Quantum = () => {
  const router = useRouter();
  const query = useSelector((state) => state?.query.query || '');

  // Filter quantum based on the search query
  const quantumAfterQuery = listOfQuantum?.filter((val) =>
    val.name.toLowerCase().includes(query.toLowerCase())
  );

  // Handle click event to redirect to the RedirectPage
  const handleRedirect = (url) => {
    if (url) {
      const encodedUrl = encodeURIComponent(url);
      router.push(`/component/RedirectPage?url=${encodedUrl}`);
    }
  };

  return (
    <>
      {/* Top Ad */}
      <div className=" p-4 shadow-md mb-4">
        <AdCode />
      </div>
      
      {/* Search Component */}
      <div className=" p-4 shadow-md mb-4">
        <Search />
      </div>

      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
        {/* Sticky Sidebar for Desktop and Mobile */}
        <div className="sticky top-24 p-4  shadow-md lg:w-1/4 lg:h-screen lg:overflow-auto lg:block lg:border-r lg:border-gray-200">
          <AdCode />
          {/* <AdCode /> */}
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 p-4 flex-1">
          <div className="p-4">
            <div className="hidden lg:block mb-4">
              <AdCode />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {query
                ? quantumAfterQuery?.map((val, index) => (
                    <div
                      onClick={() => handleRedirect(val.src)}
                      key={index}
                      className="p-4 bg-white shadow-lg rounded-lg border border-gray-300 cursor-pointer transition-transform transform hover:scale-105"
                    >
                      <div className="flex justify-center items-center mb-4">
                        <Image
                          src={pdf}
                          alt="pdf"
                          width={144}
                          height={144}
                          className="w-24 h-24"
                          placeholder="blur"
                          blurDataURL={pdf.src}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800 mb-1">{val.name}</p>
                        <p className="text-sm text-gray-500">{val.year}</p>
                      </div>
                    </div>
                  ))
                : listOfQuantum?.map((val, index) => (
                    <div
                      onClick={() => handleRedirect(val.src)}
                      key={index}
                      className="p-4 bg-white shadow-lg rounded-lg border border-gray-300 cursor-pointer transition-transform transform hover:scale-105"
                    >
                      <div className="flex justify-center items-center mb-4">
                        <Image
                          src={pdf}
                          alt="pdf"
                          width={144}
                          height={144}
                          className="w-24 h-24"
                          placeholder="blur"
                          blurDataURL={pdf.src}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800 mb-1">{val.name}</p>
                        <p className="text-sm text-gray-500">Year: {val.year}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* Bottom Ad for Mobile */}
        
      </div>
    </>
  );
};

export default Quantum;
