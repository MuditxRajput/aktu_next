import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "./component/Footer/page";
import Header from "./component/Header/Page";
import "./globals.css";
import { Providers } from "./store/providers";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children, pageTitle, pageDescription, pageKeywords }) {
  const title = pageTitle || "Aktu Free Quantum for B.Tech Students";
  const description = pageDescription || "Get all B.tech 1st, 2nd, 3rd and 4th year aktu quantum in just one click";
  const keywords = pageKeywords || "Aktu, Quantum, B.Tech, PDF, Syllabus , aktu 1st year quantum, aktu 2nd year quantum,aktu quantum";

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={keywords} />
        <meta name="google-site-verification" content="rZNyTXrezE4ImuJHdfcYhqOPIcsK023w7VEJRdYdZiE" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KPG8BQ65JZ"></script>

        <Script dangerouslySetInnerHTML={{ __html:`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-KPG8BQ65JZ');
        ` }} />
        <Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8884977910314227"
  crossOrigin="anonymous"
  strategy="lazyOnload"
/>
      </head>
      <body className={inter.className}>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}