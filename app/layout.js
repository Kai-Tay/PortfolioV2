import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const gilmerHeavy = localFont({
  src: "./fonts/Gilmer-Heavy.otf",
});

export const metadata = {
  title: "Tay Kai Sheng",
  description: "This is fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${gilmerHeavy.className}`}
      >
        {children}
      </body>
    </html>
  );
}
