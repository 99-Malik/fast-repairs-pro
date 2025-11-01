import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto"
});

export const metadata = {
  title: "Fast Repairs Pro - Premium Appliance Repair Services",
  description:
    "Professional appliance repair services across UAE. Expert technicians for refrigerators, washing machines, dishwashers, ovens, and all home appliances. Same-day service available.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
    <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17646396822" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17646396822');
        ` }} />
        

</head>
      <body className={`${poppins.className} antialiased`}>

      {children}
      </body>
      
    </html>
  );
}
