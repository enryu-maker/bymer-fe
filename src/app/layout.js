import { Oswald, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Bymer Elastomers | Quality Rubber Products Manufacturer",
  description: "Bymer Elastomers is an IATF 16949:2016, ISO 9001:2015 and ISO 14001:2015 certified company, manufacturing high-end Rubber Compounds, Molded Rubber, Rubber To Metal Bonded Products, Extruded Rubber Profiles, and Low Pressure Hoses in MIDC Ambad, Nashik.",
  icons: {
    icon: [
      { url: "/images/bymer-logo.png", type: "image/png" },
    ],
    shortcut: "/images/bymer-logo.png",
    apple: "/images/bymer-logo.png",
  },
};

import { CompanySettingsProvider } from "@/components/layout/CompanySettingsContext";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCF9F8] text-[#1C1B1B]">
        <CompanySettingsProvider>
          {children}
        </CompanySettingsProvider>
      </body>
    </html>
  );
}

