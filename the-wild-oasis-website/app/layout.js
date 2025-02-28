import React from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata = {
  title: "The Wild Oasis",
};

function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}

export default RootLayout;
