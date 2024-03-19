import React, { useState, useEffect, useRef } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleEditorChange = (newState) => {
    setEditorState(newState);
  };
  const editor = useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor();
  }, []);
  return (
    <div
      style={{ border: "1px solid orange", padding: "5px", minHeight: "400px" }}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  );
};

export default MyEditor;
