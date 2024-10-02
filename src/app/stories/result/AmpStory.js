export default function AmpStory() {
    return (
      <amp-story
        standalone=""
        title="  How to Check AKTU Results: Step-by-Step Guide"
        publisher="Aktu result"
        publisher-logo-src="/assets/logo.png"
        poster-portrait-src="/assets/hands.png"
      >
        <amp-story-page id="cover">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="/assets/aktu_result1.jpeg"
              width="900"
              height="1600"
              layout="responsive"
              alt="aktu_Result"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Aktu 2024 result declare, check your result now | aktu OneView
            </h1>
            <p className="absolute bottom-60 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
              {/* See how much you earn in future using <span className="font-bold text-yellow-300">Palmistry</span> */}
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="cover1">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="/assets/aktu_result2.jpg"
              width="900"
              height="1600"
              layout="responsive"
              alt="aktu_Result"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Step 2: Go to the Results Section.
            </h1>
            <p className="absolute bottom-20 p-2 text-white bg-black w-full">
              1. Go to the AKTU OneView Official Website
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="cover2">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="/assets/aktu_result3.jpeg"
              width="900"
              height="1600"
              layout="responsive"
              alt="aktu_Result"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Step 4: Type in Your Password
            </h1>
            <p className="absolute bottom-20 p-2 text-white bg-black w-full">
            Step 3: Landing on Aktu one view official website
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="cover3">
          <amp-story-grid-layer template="fill">
            <amp-img
             src="/assets/aktu_result1.jpeg"
              width="900"
              height="1600"
              layout="responsive"
              alt="aktu_Result"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Step 6: Examine Your Findings
            </h1>
            <p className="absolute bottom-20 p-2 text-white bg-black w-full">
            Step 5: Enter your DOB and fill in the captcha
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="cover4">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="/assets/aktu_result3.jpeg"
              width="900"
              height="1600"
              layout="responsive"
              alt="aktu_Result "
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            {/* <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Step 6: Examine Your Findings
            </h1> */}
            <p className="absolute bottom-20 p-2 text-white bg-black w-full">
            Step 7: Print or Download Your Results
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
  
        {/* Add more pages as needed */}
      </amp-story>
    );
  }
  