import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appliances Repairs UAE",
  description:
    "Appliances Repairs UAE is a local appliance repair company in the Dubai and Abu Dhabi. We specialize in repairing all major appliances including refrigerators, washers, dryers, stoves, and more.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
    <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16532858519" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16532858519');
        ` }} />
        <Script type="text/javascript" async dangerouslySetInnerHTML={{ __html: `
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            var target = 'https://www.clickcease.com/monitor/stat.js';
            script.src = target;
            var elem = document.head;
            elem.appendChild(script);
          ` }} />
           {/* Include gtag_report_conversion script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
            'send_to': 'AW-16532858519/zpcMCL-KorgZEJfNvcs9',
              'event_callback': callback
            });
            return false;
          }
        ` }} />


</head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGCK73CF" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          {/* <!--  ClickCease.com tracking--> */}
          <a href="https://www.clickcease.com" rel="nofollow">
            <img src="https://monitor.clickcease.com" alt="ClickCease" />
          </a>
          {/* <!--  ClickCease.com tracking--> */}
        </noscript>
      
      {children}
      </body>
      
    </html>
  );
}
