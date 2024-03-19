import React from "react";
import Editor from "@react-page/editor";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";

const cellPlugins = [slate(), image()];

function ReactPage() {
  return <Editor cellPlugins={cellPlugins} />;
}

export default ReactPage;
