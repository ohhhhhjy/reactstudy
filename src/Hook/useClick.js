import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  }, []);
  return () => {
    if (element.current) {
      element.current.removeEventListener("click", onClick);
    }
  };
};

const App = () => {
  const sayHello = () => {
    console.log("say hello");
  };
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>HI</h1>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
