import { Archivo_Narrow, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivoNarrow.variable} ${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCF9F8] text-[#1C1B1B]">
        {children}
      </body>
    </html>
  );
}

