import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  const [htmlCode, setHtmlCode] = useState("<h1>Hello World!</h1>");

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Editor code={htmlCode} setCode={setHtmlCode} />
        <Preview code={htmlCode} />
      </div>
    </div>
  );
};

export default App;