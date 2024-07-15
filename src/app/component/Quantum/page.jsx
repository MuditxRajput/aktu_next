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
  const openPdf = (url) => {
    if (url) {
      const decodedUrl = decodeURIComponent(url);
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = decodedUrl;
      } else {
        window.open(decodedUrl, "_blank", "noopener,noreferrer");
      }
    }
    // const urlImp = 
    // router.push(`/component/RedirectPage?url=${encodeURIComponent(url)}`);
  };
  const quantumAfterQuery = listOfQuantum?.filter((val) =>
    val.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Search />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="sidebar lg:w-1/4 p-4 bg-gray-100 order-1 lg:order-1">
            {/* <h2 className="text-xl font-semibold mb-4">Left Sidebar Content</h2>
            <p>This is the left sidebar content. On mobile devices, this will appear at the top.</p> */}
            <div>

            <AdCode/>
            </div>
          </div>
          <div className="main-content lg:w-1/2 p-2 order-2 lg:order-2">
            <div>
              <AdCode/>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 m-3 p-5 gap-6 md:gap-10">
              {query ? quantumAfterQuery?.map((val, index) => (
                <div
                  onClick={() => openPdf(val.src)}
                  key={index}
                  className="cursor-pointer hover:shadow-lg hover:shadow-gray-400 sm:w-[200px] sm:h-[290px] h-[250px] rounded-2xl border-2 border-gray-300 transition-transform transform hover:scale-105"
                >
                  <div className="flex justify-center items-center h-3/5">
                    <Image 
                      src={pdf} 
                      alt="pdf" 
                      width={144} 
                      height={144} 
                      className="w-36"
                      placeholder="blur"
                      blurDataURL={pdf.src} 
                    />
                  </div>
                  <div className="px-3 py-2 bg-white rounded-b-2xl">
                    <p className="text-lg font-semibold text-gray-800">{val.name}</p>
                    <p className="text-sm text-gray-500">{val.year}</p>
                  </div>
                </div>
              )) : listOfQuantum?.map((val, index) => (
                <div
                  onClick={() => openPdf(val.src)}
                  key={index}
                  className="cursor-pointer hover:shadow-lg hover:shadow-gray-400 sm:w-[200px] sm:h-[290px] h-[250px] rounded-2xl border-2 border-gray-300 transition-transform transform hover:scale-105"
                >
                  <div className="flex justify-center items-center h-3/5">
                    <Image 
                      src={pdf} 
                      alt="pdf" 
                      width={144} 
                      height={144} 
                      className="w-36"
                      placeholder="blur"
                      blurDataURL={pdf.src} 
                    />
                  </div>
                  <div className="px-3 py-2 bg-white rounded-b-2xl">
                    <p className=" text-xs sm:text-lg font-semibold text-gray-800">{val.name}</p>
                    <p className="text-sm text-gray-500">year : {val.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar lg:w-1/4 p-4 bg-gray-100 order-3 lg:order-3">
            
            <AdCode/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quantum;
