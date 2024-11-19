// RedirectPage.js
'use client';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import AdCode from "../AdCode";
const RedirectPage = () => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [showButton, setShowButton] = useState(false);
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setShowButton(true);
    }
  }, [timeLeft]);

  const handleOpenPdf = () => {
    if (url) {
      router.push(`/component/SecRedirect?url=${url}`);
    } else {
      window.open(decodedUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4  p-4 order-1 lg:order-1 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold mb-5">
            Wait for some time, your PDF is on the way 🏃🏃
          </h2>
          
          <div className="p-4 flex justify-center items-center">
            {!showButton && (
              <div className="text-semibold whitespace-nowrap">
                Download will start in {timeLeft} seconds
                <Link href="https://t.me/freeAktuQuantum1" >
                <div className="flex justify-center items-center mt-5 cursor-pointer">
                  <FaTelegram className="text-5xl sm:text-6xl text-blue-500" />
                  <p className="px-3 text-lg font-semibold  underline">
                    Join our Telegram
                  </p>
                </div>
              
              </Link>
                <AdCode />
              </div>
            )}
            {showButton && (
              <div>
                <AdCode/>
                 <button
                className="bg-orange-600 text-white font-semibold px-2 rounded-md m-2 shadow-md shadow-orange-300"
                onClick={handleOpenPdf}
              >
                Download PDF
              </button>
              </div>
             
            )}
          </div>

          <div className="text-lg font-semibold mb-1 mt-1">
           
            <p>What if I can't get the Aktu quantum?</p>
          </div>

          <p>
            In the header section, you get the PDF section, click on that and fill
            out the form. You need to enter some details like PDF name, year, and
            sem with code and click on submit. Within 1 hr we upload the PDF and
            you get access to that Aktu quantum PDF.
          </p>
          
          <AdCode />
        </div>

        <div className="lg:w-1/4 p-4 order-2 lg:order-2 bg-gray-100">
          {/* Additional sidebar content can go here */}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RedirectPage/>
    </Suspense>
  );
}
