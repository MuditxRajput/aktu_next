import AdCode from "../../../component/AdCode";

const AktuResultGuide = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4">
      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">
          How to Check AKTU Results: Step-by-Step Guide
        </h1>
        <p className="mb-4">
          In this post, we will see how you can check your semester result in
          just a few steps. Follow the steps below:
        </p>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Go to the AKTU OneView Official Website:</strong>
            <p>
              Launch your browser and visit the OneView result portal by
              searching for "AKTU OneView" or going to{" "}
              <a
                href="https://erp.aktu.ac.in"
                className="text-blue-500 underline"
              >
                erp.aktu.ac.in
              </a>
              .
            </p>
          </li>

          <li>
            <strong>Go to the Results Section:</strong>
            <p>
              Once you're on the AKTU OneView page, look for a "Results" tab or
              link and click on it.
            </p>
          </li>

          <li>
            <strong>Landing on AKTU OneView Official Website:</strong>
            <p>
              After clicking the link, you'll land on the official AKTU OneView
              website. You will see an input box where you need to enter your
              login details.
            </p>
          </li>

          <li>
            <strong>Type in Your Password:</strong>
            <p>
              Enter your university roll number and the correct password. Ensure
              you input accurate details to avoid errors.
            </p>
          </li>

          <li>
            <strong>Enter Your DOB and Captcha:</strong>
            <p>
              Fill in your date of birth (DOB) as per your submitted documents,
              and complete the CAPTCHA challenge.
            </p>
          </li>

          <li>
            <strong>Examine Your Results:</strong>
            <p>
              After entering the details, your semester result will appear with
              subject-wise marks, total SGPA, and more.
            </p>
          </li>

          <li>
            <strong>Print or Download Your Results:</strong>
            <p>
              Click on the print option at the top to either print or download
              your result for future reference.
            </p>
          </li>
        </ol>

        <p className="mt-6">
          <strong>Conclusion:</strong> We’ve detailed the steps for checking
          your AKTU semester results. Follow these simple steps and access your
          results easily.
        </p>
      </div>

      {/* Right Sidebar for Ads */}
      <div className="w-full lg:w-1/4 bg-gray-100 shadow-md rounded-lg p-6 mt-4 lg:mt-0 lg:ml-4">
        {/* <h2 className="text-xl font-semibold mb-4">Sponsored Ads</h2> */}
        <div className="space-y-4">
          <AdCode />
          <AdCode />
        </div>
      </div>
    </div>
  );
};

export default AktuResultGuide;
