"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import AdCode from "../AdCode";

const RedirectPage = () => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [showButton, setShowButton] = useState(false);
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

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
      const decodedUrl = decodeURIComponent(url);
      // Checking if the browser is mobile and providing a direct link
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = decodedUrl;
      } else {
        window.open(decodedUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="m-[50px] sm:m-[120px] flex flex-col sm:flex-row">
      <div className="w-full sm:w-[876px] flex flex-col justify-center items-center">
        <AdCode />
        <h2 className="text-4xl font-semibold mb-10">
          Wait for some time, your PDF is on the way 🏃🏃
        </h2>
        <AdCode />
        <div className="p-4 flex justify-center items-center">
          {!showButton && (
            <p className="text-semibold whitespace-nowrap">
              Download will start in {timeLeft} seconds
            </p>
          )}

          <AdCode />

          {showButton && (
            <button
              className="bg-orange-600 text-white font-semibold px-2 rounded-md m-2 shadow-md shadow-orange-300"
              onClick={handleOpenPdf}
            >
              Download PDF
            </button>
          )}
        </div>
        <AdCode />
        <p className="text-lg font-semibold mb-1 mt-1">
          What if I can't get the Aktu quantum?
        </p>
        <p>
          In the header section you get the PDF section, click on that and fill
          out the form. You need to enter some details like PDF name, year, and
          sem with code and click on submit. Within 1 hr we upload the PDF and
          you get access to that Aktu quantum PDF.
        </p>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RedirectPage />
    </Suspense>
  );
}
