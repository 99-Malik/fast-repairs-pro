import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appliance Repairs Pro",
  description:
    "Appliance Repairs Pro is a local appliance repair company in the Dubai and Abu Dhabi. We specialize in repairing all major appliances including refrigerators, washers, dryers, stoves, and more.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
    <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17521374535" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17521374535');
        ` }} />
        

</head>
      <body className={inter.className}>

      {children}
      </body>
      
    </html>
  );
}
