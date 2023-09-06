import Editor from "./components/Editor";
import Output from "./components/Output";
import { CodeContext } from "./context";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function App() {

  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
        e.preventDefault();
      }
    }, false);
  }, []);

  const [activeTab, setActiveTab] = useState('html');
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [editorFontSize, setEditorFontSize] = useState(15);

  const data = {
    activeTab,
    setActiveTab,
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
    editorFontSize,
    setEditorFontSize
  }

  if (isMobile) {
    return (
      <div>
        <h1 className="text-lg mx-auto text-center font-bold mt-[20%]">
          This app is not available on mobile devices.
        </h1>
      </div>
    )
  }

  return (
    <CodeContext.Provider value={data}>
      <div className="flex h-screen">
        <Editor />
        <Output />
      </div>
    </CodeContext.Provider>
  )
}