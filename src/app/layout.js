import "./globals.css";
import { Space_Grotesk } from "next/font/google";

//Components
import Header from "@/components/Header/Header";
import PageTransition from "@/components/PageTransition/PageTransition";
import StairTransition from "@/components/PageTransition/StairTransition";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "Ujjwal Dahal | Portfolio",
  description: "This is Portfolio Website of Ujjwal Dahal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Header />
        <StairTransition />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
