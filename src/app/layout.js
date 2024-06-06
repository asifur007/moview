import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar/Navbar";
import SearchBox from "@/components/Search/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoView",
  description: "A Movie Database Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
