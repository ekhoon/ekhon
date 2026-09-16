import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ekhoon - এখন",
  description: "Build by ekhoon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}