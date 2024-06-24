import Image from 'next/image'
import HeroImage from '../../Image/HeroImage.jpg'
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row  h-[450px]">
    <div className=" p-1  flex flex-col flex-1   justify-center items-center">
      <div className=" flex flex-col gap-5 justify-center ">
        <h1 className=" text-3xl sm:text-5xl font-semibold ">
          Free
          <span className="text-orange-600 hover:text-orange-700 ">
            {" "}
            AKTU Quantum
          </span>{" "}
          <br></br>Study Guides <br></br>Ace Your Exams <br></br> Last Minute.
        </h1>
        <h2 className=" text-sm sm:text-md">
          Dive into AKTU quantum pdf with our website, offering free AKTU
          quantum PDFs.<br></br> Explore comprehensive resources for free
          quantum PDFs. <br></br>Get your AKTU quantum solutions hassle-free!
          <br></br> Get all year aktu quantum pdf download.
        </h2>
      </div>
    </div>
    <div className="flex flex-1  justify-center items-center">
      <Image src={HeroImage} alt="hero" className="w-[140px] sm:w-[450px]" loading="lazy" />

    </div>
  </div>
  )
}

export default Hero