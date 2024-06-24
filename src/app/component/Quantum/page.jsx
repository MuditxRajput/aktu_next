"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import pdf from '../../Image/pdf.png';
import listOfQuantum from "../../utils/quantum";
import Search from "../Search/Page";
import InBetweenPost_Responsive from "../ads/page";
const Quantum = () => {
  const router = useRouter();
  const query = useSelector((state) => state?.query.query || '');
  const openPdf = (url) => {
    router.push(`/component/RedirectPage?url=${encodeURIComponent(url)}`);
  };
  const quantumAfterQuery = listOfQuantum?.filter((val) =>
    val.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Search />
      <div>
        <InBetweenPost_Responsive/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 m-3 p-5 gap-6 md:gap-10">
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
              <p className="text-lg font-semibold text-gray-800">{val.name}</p>
              <p className="text-sm text-gray-500">year : {val.year}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Quantum;
