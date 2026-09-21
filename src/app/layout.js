import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ekhoon | Find Trusted Home Service Providers in Bangladesh",
  description: "Find trusted home service providers near you with Ekhoon. Connect with available technicians for home repairs, maintenance, and other services in Bangladesh.",
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