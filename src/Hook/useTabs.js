import React, { useState } from "react";
import ReactDOM from "react-dom";
const content = [
  {
    tab: "Section1",
    content: "I'm the content of the Section1"
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section2"
  }
];
const useTabs = (initialTabs, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabs);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);