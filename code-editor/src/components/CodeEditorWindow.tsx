import Editor from "@monaco-editor/react";
import { FC, useState } from "react";

type EditorProps = {
    code : string
    language: string
    theme : string
    onChange : (action: string, data: string) => void
}

export const CodeEditorWindow:FC<EditorProps> = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value: any) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className='overlay rounded-md overflow-hidden w-full h-full shadow-4xl'>
      <Editor
        height="80vh"
        width={`100%`}
        language={language || "typescript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
}
