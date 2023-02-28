import { useEffect, useState } from "react";
import "./App.css";
import { ThemeDropdown } from "./components/ThemeDropdown";
import { languageOptions } from "./constants/languageOptions";
import { javascriptDefault } from "./constants/intialCode";
import { CodeEditorWindow } from "./components/CodeEditorWindow";
import { LanguagesDropdown } from "./components/LanguagesDropdown";
import { defineTheme } from "./constants/defineTheme";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
type languageOptions = {
  id: number;
  name: string;
  label: string;
  value: string;
};

type Options = {
  label: string;
  value: string;
};

function App() {
  const [code, setCode] = useState(javascriptDefault);
  const [theme, setTheme] = useState<Options>({
    label: "Vs-dark",
    value: "vs-dark",
  });
  const [language, setLanguage] = useState<languageOptions>(languageOptions[0]);

  function handleThemeChange(option: Options) {
    const theme = option;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then(() => setTheme(theme));
    }
  }

  useEffect(() => {
    defineTheme("blackboard").then(() =>
      setTheme({ value: "blackboard", label: "Blackboard" })
    );
  }, []);

  const handleCodeChange = (action: string, data: string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleSelectChange = (value: languageOptions) => {
    console.log("selected Option...", value.label);
    setLanguage(value);
  };

  const showSuccessToast = () => {
    toast.success('🎉 Snippet Posted Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  const showErrorToast = () => {
    toast.error('Error Occured while posting Snippet', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <div className="bg-fuchsia-500 min-h-screen">
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='flex flex-row'>
        <div className='px-4 py-2'>
          <LanguagesDropdown onSelectChange={handleSelectChange} />
        </div>
        <div className='px-4 py-2'>
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
        <div className='px-4 py-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={showSuccessToast}>
            Post Snippet
          </button>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full h-full'>
          <CodeEditorWindow
            code={code}
            onChange={handleCodeChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
