'use client';
import { useEffect } from 'react';

const AdCode = () => {
    useEffect(() => {
        // Check if window.adsbygoogle is defined and push an empty object to initialize ads
        if (typeof window !== "undefined" && window.adsbygoogle) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error('Adsbygoogle push error:', e);
            }
        }
    }, []);

    return (
        <div>
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
