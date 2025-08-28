import React from "react";

const Preview = ({ code }) => {
  return (
    <div className="preview">
      <h2 className="panel-title">👀 Live Preview</h2>
      <iframe
        title="preview"
        className="preview-iframe"
        sandbox="allow-scripts allow-same-origin"
        srcDoc={code}
      />
    </div>
  );
};

export default Preview;
