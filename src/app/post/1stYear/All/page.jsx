import AdCode from "../../../component/AdCode";
import Head from "next/head";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

const All = () => {
  const pageTitle =
    "AKTU Quantum B-Tech 1st Year All Branch PDF Download | Free Resources Available";
  const pageDescription =
    "Download AKTU Quantum PDFs for B-Tech 1st Year covering all branches. Essential study materials, free and tailored to the AKTU syllabus.";
  const pageKeywords =
    "AKTU Quantum, B-Tech 1st Year, Free PDF Download, AKTU Syllabus, Engineering Mathematics, Engineering Chemistry, Mechanical Engineering, Electronics Engineering";
    const canonicalUrl = "http://aktu-quantum.online/post/1stYear/All";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta
          property="og:url"
          content="http://aktu-quantum.online/post/1stYear/All"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
        <link rel="canonial" href={canonicalUrl} />
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="main-content lg:w-3/4 lg:mr-6 bg-white p-7 rounded-md shadow-sm shadow-gray-700">
            <div className="mb-10">
              <h1 className="font-bold text-4xl mb-4 text-black">
                AKTU Quantum B-Tech 1st Year All Branch PDF Download
              </h1>
              <p className="text-lg text-gray-700">
                Essential study materials, free and tailored to the AKTU
                syllabus.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-gray-800 leading-7">
                If you are a B-Tech 1st-year student at Dr. A.P.J. Abdul Kalam
                Technical University (AKTU), you're in the right place. We
                understand the challenges of getting hold of the right study
                materials, especially when it comes to preparing for exams or
                understanding complex topics. That’s why we are here to provide
                you with AKTU Quantum PDFs for B-Tech 1st Year, covering all
                branches. The best part? These resources are absolutely free to
                download!
              </p>
              <Link href="https://t.me/freeAktuQuantum1">
                <div className="flex justify-center items-center mt-5 cursor-pointer">
                  <FaTelegram className="text-5xl sm:text-6xl text-blue-500" />
                  <p className="px-3 text-lg font-semibold  underline">
                    Join our Telegram
                  </p>
                </div>
                <AdCode/>
              </Link>
              <Link href="/component/Quantum">
                <button className="mt-5 px-6 py-3 bg-orange-500 text-white rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                  Download Quantum PDFs
                </button>
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-semibold  mb-4 mt-1">
                List of Free AKTU Quantum PDFs Available for B-Tech 1st Year
              </h2>
              <p className="text-gray-800 leading-7">
                Below is the list of all the essential subjects for B-Tech
                1st-year students, across all branches, that you can download
                for free. These PDFs cover everything you need to excel in your
                first-year exams.
              </p>
               
              <ul className="list-disc ml-5 mt-5 space-y-2 text-gray-700">
                   <li>Soft Skills PDF</li>
                 <Link href='/post/1stYear/Fmem'> <li>Fundamental of Mechanical Engineering PDF</li> </Link> 
                 <Link href='/post/1stYear/Chemistry'><li>Engineering Chemistry PDF</li> </Link>
                 <Link href='/post/1stYear/Electronic'> <li>Fundamentals of Electronics Engineering PDF</li> </Link>
                 <Link  href='/post/1stYear/Maths2'><li>Engineering Mathematics-I PDF</li> </Link>
                <Link href='/post/1stYear/Maths2'> <li>Engineering Mathematics-II PDF</li>  </Link>
                <Link href='/post/1stYear/Physics'><li>Engineering Physics PDF</li> </Link>
                <li>Fundamentals of Electrical Engineering PDF</li>
                <Link href='/post/1stYear/Environmentss'> <li>Environment and Ecology PDF</li> </Link>
                <li>Programming for Problem-Solving PDF</li>
                
              </ul>

              <h2 className="text-2xl font-semibold  mb-4 mt-6">
                Benefits of Downloading AKTU Quantum PDFs
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Free of Cost:</span> No hidden
                  charges, no subscription fees – just download and start
                  learning!
                </li>
                <li>
                  <span className="font-semibold">Comprehensive Coverage:</span>{" "}
                  These PDFs are designed to cover the entire syllabus.
                </li>
                <li>
                  <span className="font-semibold">Convenience:</span> Study
                  anytime, anywhere – on your laptop, tablet, or even your
                  smartphone.
                </li>
                <li>
                  <span className="font-semibold">Easy to Understand:</span>{" "}
                  Clear and concise material for easier understanding.
                </li>
                <li>
                  <span className="font-semibold">Exam-Oriented:</span> Focused
                  on key areas likely to appear in exams.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold  mb-4 mt-6">
                How to Download the AKTU Quantum PDFs?
              </h2>
              <p className="text-gray-800 leading-7">
                Downloading these PDFs is simple. Just click on the links
                provided for each subject, and the file will be downloaded to
                your device. You can access them offline, making it easier to
                study without the need for an internet connection.
              </p>

              <h2 className="text-2xl font-semibold  mb-4 mt-6">
                Final Thoughts
              </h2>
              <p className="text-gray-800 leading-7">
                The first year of B-Tech is crucial as it sets the foundation
                for your entire engineering journey. With the AKTU Quantum PDFs,
                you’ll have the right tools to succeed. Start downloading the
                free AKTU Quantum PDFs and take the first step toward academic
                success in your B-Tech journey.
              </p>
              <p className="text-gray-800 leading-7">
                Stay tuned for more resources and updates. Happy studying!
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sidebar lg:w-1/4 bg-gray-100 p-5 rounded-md shadow-md mb-6 lg:mb-0 lg:ml-6">
            <h2 className="text-2xl font-semibold  mb-5">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/component/Quantum">
                  <p className="text-lg text-gray-700 hover: transition">
                    Quantum PDFs
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/post/1stYear/Maths2">
                  <p className="text-lg text-gray-700 hover: transition">
                    Engineering Mathematics
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/post/1stYear/Physics">
                  <p className="text-lg text-gray-700 hover: transition">
                    Engineering Physics
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/post/1stYear/Chemistry">
                  <p className="text-lg text-gray-700 hover: transition">
                    Engineering Chemistry
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/post/1stYear/Fmem">
                  <p className="text-lg text-gray-700 hover: transition">
                    Mechanical Engineering
                  </p>
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default All;
