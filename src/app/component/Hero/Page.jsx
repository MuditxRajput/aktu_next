import Image from 'next/image'
import HeroImage from '../../Image/HeroImage.jpg'

const Hero = () => {
  return (
    <div className="flex flex-col mb-10 sm:flex-row h-[500px] sm:h-[600px]">
      <div className="p-6 sm:p-12 flex flex-col flex-1 justify-center items-center">
        <div className="text-center sm:text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Free
            <span className="text-orange-600 hover:text-orange-700 transition-colors duration-200">
              {" "}
              AKTU Quantum
            </span>{" "}
            <br />
            Study Guides <br />
            Ace Your Exams <br />
            Last Minute.
          </h1>
          <h2 className="text-sm sm:text-base lg:text-lg text-gray-700">
            Dive into AKTU quantum PDFs with our website, offering free AKTU quantum PDFs.
            <br />
            Explore comprehensive resources for free quantum PDFs.
            <br />
            Get your AKTU quantum solutions hassle-free!
            <br />
            Get all year AKTU quantum PDF download.
          </h2>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Image 
          src={HeroImage} 
          alt="Hero" 
          className="w-[200px] sm:w-[300px] lg:w-[400px] rounded-lg shadow-lg"
          loading="lazy" 
        />
      </div>
    </div>
  )
}

export default Hero
