'use client';
import { useEffect } from 'react';

const AdCode = () => {
  
  useEffect(() => {

    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    catch (e) {
            console.log(e);
    }

},[]);

  return (
    <div>
    <ins class="adsbygoogle"
 style={{display:"block"}}
 data-ad-client="ca-pub-8884977910314227"
 data-ad-slot="4416077835"
 data-ad-format="auto"
 data-full-width-responsive="true"></ins>
</div>
  );
};
{/* <div className="container mx-auto text-center" style={{ minHeight: '1px', minWidth: '1px' }} aria-hidden={true}> */}
export default AdCode;
