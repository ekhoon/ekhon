import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL("https://ekhoon.com"),

  title: {
    default: "Ekhoon | Trusted Home Services in Bangladesh",
    template: "%s | Ekhoon",
  },

  description:
    "Find trusted home service providers in Bangladesh with Ekhoon. Connect with professionals for home repairs, maintenance, cleaning, electrical, plumbing, AC service, and more.",

  keywords: [
    "home service Bangladesh",
    "home services Bangladesh",
    "home service provider",
    "home repair Bangladesh",
    "AC service Bangladesh",
    "plumber Bangladesh",
    "electrician Bangladesh",
    "cleaning service Bangladesh",
    "Ekhoon",
  ],

  authors: [{ name: "Ekhoon" }],
  creator: "Ekhoon",
  publisher: "Ekhoon",

  alternates: {
    canonical: "https://ekhoon.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Ekhoon | Trusted Home Services in Bangladesh",
    description:
      "Find trusted home service providers in Bangladesh with Ekhoon.",
    url: "https://ekhoon.com",
    siteName: "Ekhoon",
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}