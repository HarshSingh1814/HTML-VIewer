import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Prism dark theme

const Editor = ({ code, setCode }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const loadTemplate = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      const htmlSnippet = `
        <div style="font-family: sans-serif; padding: 1.5rem; border: 1px solid #ddd; border-radius: 8px;">
          <h2>${data.title}</h2>
          <p>${data.body}</p>
        </div>
      `;
      setCode(htmlSnippet);
    } catch (error) {
      console.error("Error fetching template:", error);
    }
  };

  return (
    <div className="editor">
      <h2 className="panel-title">✍ Editor</h2>
      <textarea
        className="editor-textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="code-preview">
        <pre className="language-html">
          <code className="language-html">{code}</code>
        </pre>
      </div>
      <button onClick={loadTemplate} className="btn">
        📥 Load Sample Template
      </button>
    </div>
  );
};

export default Editor;
