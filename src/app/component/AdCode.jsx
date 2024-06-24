'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AdCode = () => {
  const router = useRouter();

  useEffect(() => {
    const renderAds = () => {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('Adsbygoogle push error:', e);
        }
      }
    };

    renderAds();

    router.events?.on('routeChangeComplete', renderAds);

    // Clean up the event listener on unmount
    return () => {
      router.events?.off('routeChangeComplete', renderAds);
    };
  }, [router]);

  return (
    <div className="container mx-auto text-center" style={{ minHeight: '1px', minWidth: '1px' }} aria-hidden={true}>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8884977910314227"
        data-ad-slot="4416077835"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdCode;
