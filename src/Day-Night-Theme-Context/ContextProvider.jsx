import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";


const ContextProvider = () => {
  return (
    <ThemeProvider>
      <div className="context-provider-container">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default ContextProvider;
