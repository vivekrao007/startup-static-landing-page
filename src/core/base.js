import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Base({ children }) {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">{children}</div>
      <Footer></Footer>
    </React.Fragment>
  );
}
