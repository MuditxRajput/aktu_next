// src/components/AdCode.jsx
'use client';
import { useEffect } from 'react';

const AdCode = () => {
  useEffect(() => {
    const initializeAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log("Error in ads initialization:");
        console.error(e);
      }
    };

    // Check if the adsense script has loaded
    if (window.adsbygoogle) {
      initializeAds();
    } else {
      // If not, wait for it to load
      const script = document.querySelector("script[src^='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js']");
      if (script) {
        script.onload = initializeAds;
      }
    }
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8884977910314227"
        data-ad-slot="4416077835"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <style jsx>{`
        .ad-container {
          width: 100%;
          min-height: 250px;
          margin: 20px 0;
        }
        @media (max-width: 768px) {
          .ad-container {
            min-height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdCode;