// // src/components/AdCode.jsx
// 'use client';
// import { useEffect } from 'react';

// const AdCode = () => {
//   useEffect(() => {
//     const initializeAds = () => {
//       try {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       } catch (e) {
//         console.error('Adsbygoogle push error:', e);
//       }
//     };

//     if (typeof window !== 'undefined' && window.adsbygoogle) {
//       initializeAds();
//     } else {
//       // Reattempt initialization if the script is not yet loaded
//       const interval = setInterval(() => {
//         if (window.adsbygoogle) {
//           initializeAds();
//           clearInterval(interval);
//         }
//       }, 500);
//     }
//   }, []);

//   return (
//     <div>
//       <ins
//         className="adsbygoogle"
//         style={{ display: 'block' }}
//         data-ad-client="ca-pub-8884977910314227"
//         data-ad-slot="4416077835"
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       ></ins>
//     </div>
//   );
// };

// export default AdCode;
