// components/ads/InBetweenPost_Responsive.jsx
"use client";
import { useEffect } from "react";

const InBetweenPost_Responsive = () => {
  useEffect(() => {
    try {
      console.log("Runnning");
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
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

export default InBetweenPost_Responsive;
