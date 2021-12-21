import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePreve = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disnablePreve = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePreve, disnablePreve };
};
const App = () => {
  const { enablePreve, disnablePreve } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePreve}>protect</button>
      <button onClick={disnablePreve}>unprotect</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
