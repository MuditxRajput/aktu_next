'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import AdCode from '../../component/AdCode';
import Search from '../../component/Search/Page';
import YearSelection from '../../component/YearSelection/page';
import pdf from '../../Image/pdf.png';
import paper from '../../utils/paper';

const Page = () => {
  const router = useRouter();
  const selectedYear = useSelector((state) => state?.query.yearForPaper);
  let filterPdf = paper?.filter((val) => val.year === selectedYear);
  const query = useSelector((state) => state?.query.query);
  
  if (query) {
    filterPdf = filterPdf?.filter((val) =>
      val.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  const handleRedirect = (url) => {
    if (url) {
      const encodedUrl = encodeURIComponent(url);
      router.push(`/component/RedirectPage?url=${encodedUrl}`);
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>AKTU Question Papers All Courses All Semester AKTU</title>
        <meta name="description" content={`Get all the B.Tech previous year papers for the year ${selectedYear}. Download PDFs and prepare effectively.`} />
        <meta name="keywords" content={`B.Tech, AKTU Question Papers, Previous Year Papers, Aktu, Aktu previous year paper,  Engineering Papers, Download PDFs`} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`B.Tech Previous Year Papers - ${selectedYear}`} />
        <meta property="og:description" content={`Download all B.Tech previous year papers for ${selectedYear} in PDF format.`} />
        {/* <meta property="og:image" content="/path/to/your-image.jpg" /> Replace with the actual image URL */}
        <meta property="og:url" content="https://aktu-quantum.online/YearSection/PreviousYear" /> {/* Replace with the actual page URL */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* Left Sidebar */}
        <div className="col-span-12 md:col-span-2 p-4">
          <div className="sticky top-0 bg-white z-20">
            <AdCode />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-8 p-4">
          <h1 className="flex justify-center items-center mt-5 text-xl px-2 sm:text-2xl font-semibold">
            Get All 2024 B.Tech Previous Papers here...
          </h1>
          <Search />
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
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              AKTU Question Papers All Courses All Semesters | B.Tech AKTU Previous Year Question Papers
            </h2>
            
            <p className="text-lg mb-4">
              If you're a student of Dr. A.P.J. Abdul Kalam Technical University (AKTU), you know the importance of having access to the right study materials. One of the most valuable resources for exam preparation is the <strong>AKTU previous year papers</strong>. These papers are a goldmine of information, offering insight into the exam pattern, the types of questions asked, and the level of difficulty you can expect in your exams. In this article, we'll explore why AKTU question papers for all courses and all semesters are essential, how to use them effectively, and where to find them.
            </p>

            <h2 className="text-xl font-semibold mb-4">Why AKTU Previous Year Papers Matter</h2>
            <p className="mb-4">
              AKTU, formerly known as UPTU (Uttar Pradesh Technical University), conducts exams for a wide range of courses, including B.Tech, MBA, MCA, B.Pharma, and more. The university follows a rigorous exam schedule, and the question papers are designed to test the depth of your understanding of the subject.
            </p>
            <p className="mb-4">
              <strong>AKTU previous year papers</strong> serve several purposes:<br />
              <Link className='text-orange-600' href={'/component/Quantum'}>Get Aktu Quantum all year</Link>
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Understanding the Exam Pattern:</strong> By reviewing past papers, you can get a clear idea of the exam format, the marking scheme, and the weightage of different topics.</li>
              <li><strong>Identifying Important Topics:</strong> Often, certain topics are repeated across different years. By analyzing these patterns, you can prioritize your study efforts on the most important areas.</li>
              <li><strong>Time Management Practice:</strong> Solving these papers within the allotted time helps you manage your time effectively during the actual exam.</li>
              <li><strong>Boosting Confidence:</strong> Familiarity with the types of questions asked in previous exams can boost your confidence and reduce exam anxiety.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">A Comprehensive Approach: AKTU Previous Year Paper for B.Tech</h2>
            <p className="mb-4">
              For B.Tech students, AKTU offers a well-structured curriculum that spans four years, each consisting of two semesters. Access to <strong>AKTU previous year papers</strong> for all semesters and all years is crucial for a comprehensive understanding of the course material.
            </p>

            <h3 className="text-lg font-semibold mb-3">AKTU Previous Year Paper B.Tech 1st Year</h3>
            <p className="mb-4">
              The first year lays the foundation for your engineering education. It covers basic subjects like Mathematics, Physics, Chemistry, and introductory courses in your chosen branch. Going through <strong>AKTU previous year papers for B.Tech 1st year</strong> can help you understand the basics and prepare effectively for the higher years.
            </p>

            <h3 className="text-lg font-semibold mb-3">AKTU Previous Year Paper B.Tech 2nd Year</h3>
            <p className="mb-4">
              The second year delves deeper into your core engineering subjects. For instance, if you're a Computer Science student, you'll encounter subjects like Data Structures, Algorithms, and Digital Electronics. Reviewing <strong>AKTU previous year papers for B.Tech 2nd year</strong> will give you a better understanding of how these subjects are tested and what areas you need to focus on.
            </p>

            <h3 className="text-lg font-semibold mb-3">AKTU Previous Year Paper B.Tech 3rd Year</h3>
            <p className="mb-4">
              In the third year, the subjects become more specialized. Whether it's Machine Learning, Power Systems, or Civil Engineering Design, <strong>AKTU previous year papers for B.Tech 3rd year</strong> can guide your preparation and help you anticipate the type of questions that might appear in your exams.
            </p>

            <h3 className="text-lg font-semibold mb-3">AKTU Previous Year Paper B.Tech 4th Year</h3>
            <p className="mb-4">
              The final year is crucial as it prepares you for your professional career. With subjects focusing on advanced topics and project work, <strong>AKTU previous year papers for B.Tech 4th year</strong> are essential for revising key concepts and ensuring you're well-prepared for both the exams and your future career.
            </p>

            <h2 className="text-xl font-semibold mb-4">Where to Find AKTU Previous Year Papers?</h2>
            <p className="mb-4">
              Several resources are available online where you can find <strong>AKTU previous year question papers</strong> for various courses and semesters. Some of the most reliable sources include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>University Website:</strong> The official AKTU website may have archives of previous year papers.</li>
              <li><strong>Educational Portals:</strong> Websites dedicated to academic resources often have a collection of previous year papers.</li>
              <li><strong>Online Forums and Communities:</strong> Student forums and social media groups might share papers and exam-related tips.</li>
            </ul>
            <p className="mb-4">
              Make sure to verify the authenticity of the papers and use them as a supplementary resource to your main study materials.
            </p>

            <h2 className="text-xl font-semibold mb-4">Conclusion</h2>
            <p className="mb-4">
              Accessing and solving <strong>AKTU previous year papers</strong> is a valuable strategy for exam preparation. By understanding the exam pattern, practicing with past papers, and focusing on important topics, you can enhance your performance and boost your chances of success. For comprehensive preparation, combine these papers with your regular study materials and seek guidance from your professors and peers. Good luck with your exams!
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        {/* <div className="col-span-12 md:col-span-2 p-4">
          <div className="sticky top-0 bg-white z-20">
            <AdCode />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Page;
