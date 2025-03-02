import Logo from "@/app/_components/Logo";
import Navigations from "@/app/_components/Navigations";
import "@/app/_styles/globals.css";
import Header from "@/starter/components/Header";

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
        className={`${josefin.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

<<<<<<< HEAD
export default layout;
=======
export default RootLayout;
>>>>>>> 6f03f6356a103d111db72ea60287e86342d169b6
