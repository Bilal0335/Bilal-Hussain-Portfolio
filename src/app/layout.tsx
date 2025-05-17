import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header/page";
import Footer from "./Footer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "M.Bilal-Hussain-Portfolio",
//   description: "Bilal's Portfolio",
//   icons:{
//     icon:"/favicon.ico"
//   }
// };

export const metadata: Metadata = {
  title: "M. Bilal Hussain – Portfolio",
  description: "The official portfolio of M. Bilal Hussain, a passionate front-end developer crafting modern web experiences using Next.js, React, and Tailwind CSS.",
  keywords: [
    "Bilal Hussain", "Web Developer", "Frontend Developer", "Portfolio", "Next.js", "React Developer", "Tailwind CSS", "JavaScript Developer"
  ],
  authors: [{ name: "M. Bilal Hussain", url: "https://bilal-hussain-portfolio.vercel.app" }],
  creator: "M. Bilal Hussain",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "M. Bilal Hussain – Portfolio",
    description: "Explore the projects and skills of Bilal Hussain, a front-end developer with a passion for modern web technologies.",
    url: "https://bilal-hussain-portfolio.vercel.app",
    siteName: "Bilal Portfolio",
    images: [
      {
        url: "https://bilal-hussain-portfolio.vercel.app/og-image.jpg", // make sure this image exists
        width: 1200,
        height: 630,
        alt: "Bilal Hussain Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Bilal Hussain – Portfolio",
    description: "Discover Bilal Hussain's portfolio, featuring frontend projects using React and Next.js.",
    images: ["https://bilal-hussain-portfolio.vercel.app/twitter-image.jpg"], // optional but recommended
    creator: "@yourTwitterHandle", // Replace if you have Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
