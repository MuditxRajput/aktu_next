import { useEffect } from "react";

const InBetweenPost_Responsive = () => {
  useEffect(() => {
    try {
      console.log("Running adsbygoogle push");
      window.addEventListener('load', function (){
        (adsbygoogle = window.adsbygoogle || []).push({});
        })
      console.log("COMPLETE adsbygoogle push");
    } catch (e) {
      console.error("Error while pushing adsbygoogle:", e);
    }
  }, []);

  return (
    
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8884977910314227"
        data-ad-slot="4416077835"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
   
  );
};

export default InBetweenPost_Responsive;
