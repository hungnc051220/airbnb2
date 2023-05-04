import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone by HungNC",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
