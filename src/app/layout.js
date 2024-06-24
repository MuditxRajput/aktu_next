
import { Inter } from "next/font/google";
import Footer from "./component/Footer/page";
import Header from "./component/Header/Page";
import "./globals.css";
import { Providers } from "./store/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aktu Free Quantum for B.Tech Students",
  description: "Get all B.tech 1st, 2nd, 3rd and 4th year aktu quantum in just one click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KPG8BQ65JZ"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8884977910314227" crossOrigin="anonymous"></script>
        <script id="google-analytics" dangerouslySetInnerHTML={{ __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-KPG8BQ65JZ');
        ` }} />
      </head>


     
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
