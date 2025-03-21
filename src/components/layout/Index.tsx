import React from "react";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";
import ScrollbarIndicator from "./ScrollbarIndicator";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
  arabic: boolean;
  blackHeader: boolean;
}

const Layout = ({ children, arabic, blackHeader }: LayoutProps) => {
  return (
    <div>
      <ScrollbarIndicator />
      <ScrollToTop />
      <Header arabic={arabic} blackHeader={blackHeader} />
      <main>{children}</main>
      <Footer arabic={arabic} />
    </div>
  );
};

export default Layout;
