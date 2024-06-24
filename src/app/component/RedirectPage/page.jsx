// src/app/component/RedirectPage/page.jsx
"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

const RedirectPage = () => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [showButton, setShowButton] = useState(false);
  const searchParams = useSearchParams();
  const url = searchParams.get('url');

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
      window.open(decodeURIComponent(url), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div className='m-[50px] sm:m-[120px] flex flex-col sm:flex-row'>
        <div className='w-full sm:w-[876px] flex flex-col justify-center items-center'>
          <h2 className='text-4xl font-semibold mb-10'>Wait for sometime you pdf is on the way 🏃🏃</h2>
          <div className='p-4 flex justify-center items-center'>
            {!showButton && <p className='text-semibold'>Download will start in {timeLeft} seconds</p>}
            {showButton && (
              <button
                className="bg-orange-600 text-white font-semibold px-2 rounded-md m-2 shadow-md shadow-orange-300"
                onClick={handleOpenPdf}
              >
                {" "}
                Download pdf
              </button>
            )}
          </div>
          <p className="text-lg font-semibold mb-1 mt-1">What if I can't get the Aktu quantum?</p>
          <p>
            In the header section you get the pdf section, click on that and
            fill out the form you need to enter some details like pdf name,
            year, and sem with code and click on submit. Within 1 hr we upload
            the pdf and you get access to that Aktu quantum pdf.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RedirectPage />
    </Suspense>
  );
}
