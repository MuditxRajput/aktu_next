import AdCode from "./component/AdCode";
import Hero from "./component/Hero/Page.jsx";
import Middle from "./component/Middle/Page.jsx";

const Home = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <Hero/>
      <Middle/>
      <p className="px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 mt-10 text-sm ">
        In this website you can get the all B.Tech 1st, 2nd, 3rd, 4th year AKTU quantum PDF in just one click.
      </p>
      <p className="text-md sm:text-lg md:text-xl  font-semibold mb-1 mt-7 px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12">
        What if I can't get the AKTU quantum?
      </p>
      <p className="px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 text-sm ">
        In the header section, you get the PDF section, click on that and fill out the form. You need to enter some details like PDF name, year, and semester with code and click on submit. Within 1 hour, we will upload the PDF and you will get access to that AKTU quantum PDF.
      </p>
      
      <AdCode/>
    </div>
  )
}

export default Home;
