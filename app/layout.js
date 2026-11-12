import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["800"], 
});

export const metadata = {
  title: "Bitlinks - Your trusted URL shortner",
  description: "Bitlinks helps you shorten URls easily",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-purple-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}