"use client";
import { useEffect } from "react";

const AdCode = () => {
  useEffect(() => {
    const initializeAds = () => {
      console.log("Adsbygoogle object:", window.adsbygoogle);

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsbygoogle push error:", e);
      }
    };

    const checkAds = () => {
      if (window.adsbygoogle) {
        initializeAds();
        return true;
      }
      return false;
    };

    if (typeof window !== "undefined") {
      if (!checkAds()) {
        // Reattempt initialization if the script is not yet loaded
        const interval = setInterval(() => {
          if (checkAds()) {
            clearInterval(interval);
          }
        }, 500);
      }
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8884977910314227"
        data-ad-slot="4416077835"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdCode;
