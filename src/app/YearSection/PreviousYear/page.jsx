"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import AdCode from "../../component/AdCode";
import Search from "../../component/Search/Page";
import YearSelection from "../../component/YearSelection/page";
import pdf from "../../Image/pdf.png";
import paper from "../../utils/paper";
const Page = () => {
  const router = useRouter();
  const selectedYear = useSelector((state) => state?.query.yearForPaper);
  let filterPdf = paper?.filter((val) => val.year === selectedYear);
  const query = useSelector((state)=>state?.query.query);
  if(query)
  {
    filterPdf = filterPdf?.filter((val)=>val.name.toLowerCase().includes(query.toLowerCase()));
  }
  const handleRedirect = (url) => {
    if (url) {
      const encodedUrl = encodeURIComponent(url);
      router.push(`/component/RedirectPage?url=${encodedUrl}`);
    }
  };
  return (
    <div className="grid grid-cols-12 gap-4 mb-20">
      {/* Left Sidebar */}
      <div className="col-span-12 md:col-span-2 bg-gray-100 p-4">
        <div className="sticky top-0">
          {/* <h2 className="text-center font-semibold">Ad Space</h2> */}
          {/* Add your ad content here */}
          <AdCode />
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-12 md:col-span-8 p-4">
        <h1 className="flex justify-center items-center mt-5 text-xl px-2 sm:text-2xl font-semibold">
          Get All 2024 B.Tech Previous Papers here...
        </h1>
        <Search/>
        <div><AdCode /></div>
        <YearSelection />
        <p className="flex justify-center items-center mt-5 text-xl px-2 sm:text-3xl">
          Below are the {selectedYear} Year previous year papers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 m-3 p-5 gap-6 md:gap-10">
          {filterPdf?.map((val, index) => (
            <div
              onClick={() => handleRedirect(val.link)}
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
                <p className="text-md font-semibold text-gray-800">{val.name}</p>
                {/* <p className="text-sm text-gray-500">{val.year}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-12 md:col-span-2 bg-gray-100 p-4">
        <div className="sticky top-0">
          {/* <h2 className="text-center font-semibold">Ad Space</h2> */}
          {/* Add your ad content here */}
          <AdCode />
        </div>
      </div>
    </div>
  );
};

export default Page;
