// layout.js
import { Inter } from "next/font/google";
import Head from "next/head";
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
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KPG8BQ65JZ"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8884977910314227" crossOrigin="anonymous"></script>
        <script id="google-analytics" dangerouslySetInnerHTML={{ __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-KPG8BQ65JZ');
        ` }} />
      </Head>
      <body className={inter.className}>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer/>
      </body>
    </html>
  );
}
