import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "luxurious cabin hotel located in the heart of the Italian Dolomites surrounded by beautiful mountains and dark forests.",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 antialiased min-h-screen flex flex-col`}>
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto  w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default layout;
