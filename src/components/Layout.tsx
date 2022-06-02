import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import Box from "./common/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box cssClasses={["site-container"]}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
