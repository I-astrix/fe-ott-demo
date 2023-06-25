import Head from "next/head";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "OneFlix",
  description: "Your destination for Entertainment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-brand-dark `}>
        <Navbar />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
