/** @type {import('next').NextConfig} */
// export const config = { amp: true }
const nextConfig = {
  
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
  },
  experimental: {
    amp: {
      skipValidation: true
    }
  },
  async headers() {
    return [
      {
        source: '/stories/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self' https: data:;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.ampproject.org https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com;
              style-src 'self' 'unsafe-inline' https://cdn.ampproject.org;
              img-src 'self' https: data:;
              font-src 'self' https:;
              connect-src 'self' https://www.google-analytics.com https://cdn.ampproject.org;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;