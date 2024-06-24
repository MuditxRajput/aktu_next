import Hero from "./component/Hero/Page.jsx"
import Middle from "./component/Middle/Page.jsx"

const Home = () => {
  return (
    <div className=" ">
      <Hero/>
      <Middle/>
      <p className="px-7 mt-10">In this website you can get the all B.Tech 1st, 2nd, 3rd, 4th year aktu quantum pdf in just one click.</p>
      <p className="text-lg font-semibold mb-1 mt-7 px-7">
            What if I can't get the Aktu quantum?
          </p>
          <p className="px-7">
            In the header section you get the pdf section, click on that and
            fill out the form you need to enter some details like pdf name,
            year, and sem with code and click on submit. Within 1 hr we upload
            the pdf and you get access to that Aktu quantum pdf.
          </p>
    </div>
  )
}

export default Home