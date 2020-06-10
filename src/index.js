import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Articles from "./components/Articles"
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      {/* <Footer /> */}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
