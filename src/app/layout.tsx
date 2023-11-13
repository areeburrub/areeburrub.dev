import "./globals.css";
import { Noto_Sans, Roboto_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TailwindIndicator } from "@/components/ui/tailwindIndicator";

const noto = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["greek"],
  variable: "--noto-sans",
});

const roboto = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["greek"],
  variable: "--roboto-mono",
});

export const metadata = {
  title: "Areeb ur Rub | Porfolio",
  description:
    "Areeb ur Rub is passionate web developer and graphic designer. Passionate about creating intuitive and user-friendly experiences and bringing visual designs to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"dark"}>
      <body
        id="body"
        className={`${noto.variable} ${roboto.variable} font-notoSans bg-violet-darker text-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
