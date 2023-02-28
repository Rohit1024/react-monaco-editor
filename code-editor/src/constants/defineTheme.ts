import { loader } from "@monaco-editor/react";

type Themes = {
  [key: string]: string;
};

const monacoThemes: Themes = {
  "active4d": "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  "amy": "Amy",
  "birds-of-paradise": "Birds of Paradise",
  "blackboard": "Blackboard",
  "brilliance-black": "Brilliance Black",
  "brilliance-dull": "Brilliance Dull",
  "chrome-devtools": "Chrome DevTools",
  "clouds-midnight": "Clouds Midnight",
  "clouds": "Clouds",
  "cobalt": "Cobalt",
  "cobalt2": "Cobalt2",
  "dawn": "Dawn",
  "dracula": "Dracula",
  "dreamweaver": "Dreamweaver",
  "eiffel": "Eiffel",
  "espresso-libre": "Espresso Libre",
  "github-dark": "GitHub Dark",
  "github-light": "GitHub Light",
  "github": "GitHub",
  "idle": "IDLE",
  "katzenmilch": "Katzenmilch",
  "kuroir-theme": "Kuroir Theme",
  "lazy": "LAZY",
  "magicwb--amiga-": "MagicWB (Amiga)",
  "merbivore-soft": "Merbivore Soft",
  "merbivore": "Merbivore",
  "monokai-bright": "Monokai Bright",
  "monokai": "Monokai",
  "night-owl": "Night Owl",
  "nord": "Nord",
  "oceanic-next": "Oceanic Next",
  "pastels-on-dark": "Pastels on Dark",
  "slush-and-poppies": "Slush and Poppies",
  "solarized-dark": "Solarized-dark",
  "solarized-light": "Solarized-light",
  "spacecadet": "SpaceCadet",
  "sunburst": "Sunburst",
  "textmate--mac-classic-": "Textmate (Mac Classic)",
  "tomorrow-night-blue": "Tomorrow-Night-Blue",
  "tomorrow-night-bright": "Tomorrow-Night-Bright",
  "tomorrow-night-eighties": "Tomorrow-Night-Eighties",
  "tomorrow-night": "Tomorrow-Night",
  "tomorrow": "Tomorrow",
  "twilight": "Twilight",
  "upstream-sunburst": "Upstream Sunburst",
  "vibrant-ink": "Vibrant Ink",
  "xcode-default": "Xcode_default",
  "zenburnesque": "Zenburnesque",
  "iplastic": "iPlastic",
  "idlefingers": "idleFingers",
  "krtheme": "krTheme",
  "monoindustrial": "monoindustrial"
}

type Options = {
  label: string;
  value: string;
};

const themsObject: Options[] = [
  {
    label: "Active4D",
    value: "active4d",
  },
  {
    label: "All Hallows Eve",
    value: "all-hallows-eve",
  },
  {
    label: "Amy",
    value: "amy",
  },
  {
    label: "Birds of Paradise",
    value: "birds-of-paradise",
  },
  {
    label: "Blackboard",
    value: "blackboard",
  },
  {
    label: "Brilliance Black",
    value: "brilliance-black",
  },
  {
    label: "Brilliance Dull",
    value: "brilliance-dull",
  },
  {
    label: "Chrome DevTools",
    value: "chrome-devtools",
  },
  {
    label: "Clouds Midnight",
    value: "clouds-midnight",
  },
  {
    label: "Clouds",
    value: "clouds",
  },
  {
    label: "Cobalt",
    value: "cobalt",
  },
  {
    label: "Dawn",
    value: "dawn",
  },
  {
    label: "Dreamweaver",
    value: "dreamweaver",
  },
  {
    label: "Eiffel",
    value: "eiffel",
  },
  {
    label: "Espresso Libre",
    value: "espresso-libre",
  },
  {
    label: "GitHub",
    value: "github",
  },
  {
    label: "IDLE",
    value: "idle",
  },
  {
    label: "Katzenmilch",
    value: "katzenmilch",
  },
  {
    label: "Kuroir Theme",
    value: "kuroir-theme",
  },
  {
    label: "LAZY",
    value: "lazy",
  },
  {
    label: "MagicWB (Amiga)",
    value: "magicwb--amiga-",
  },
  {
    label: "Merbivore Soft",
    value: "merbivore-soft",
  },
  {
    label: "Merbivore",
    value: "merbivore",
  },
  {
    label: "Monokai Bright",
    value: "monokai-bright",
  },
  {
    label: "Monokai",
    value: "monokai",
  },
  {
    label: "Night Owl",
    value: "night-owl",
  },
  {
    label: "Oceanic Next",
    value: "oceanic-next",
  },
  {
    label: "Pastels on Dark",
    value: "pastels-on-dark",
  },
  {
    label: "Slush and Poppies",
    value: "slush-and-poppies",
  },
  {
    label: "Solarized-dark",
    value: "solarized-dark",
  },
  {
    label: "Solarized-light",
    value: "solarized-light",
  },
  {
    label: "SpaceCadet",
    value: "spacecadet",
  },
  {
    label: "Sunburst",
    value: "sunburst",
  },
  {
    label: "Textmate (Mac Classic)",
    value: "textmate--mac-classic-",
  },
  {
    label: "Tomorrow-Night-Blue",
    value: "tomorrow-night-blue",
  },
  {
    label: "Tomorrow-Night-Bright",
    value: "tomorrow-night-bright",
  },
  {
    label: "Tomorrow-Night-Eighties",
    value: "tomorrow-night-eighties",
  },
  {
    label: "Tomorrow-Night",
    value: "tomorrow-night",
  },
  {
    label: "Tomorrow",
    value: "tomorrow",
  },
  {
    label: "Twilight",
    value: "twilight",
  },
  {
    label: "Upstream Sunburst",
    value: "upstream-sunburst",
  },
  {
    label: "Vibrant Ink",
    value: "vibrant-ink",
  },
  {
    label: "Vs-dark",
    value: "vs-dark",
  },
  {
    label: "Xcode_default",
    value: "xcode-default",
  },
  {
    label: "Zenburnesque",
    value: "zenburnesque",
  },
  {
    label: "iPlastic",
    value: "iplastic",
  },
  {
    label: "idleFingers",
    value: "idlefingers",
  },
  {
    label: "krTheme",
    value: "krtheme",
  },
  {
    label: "monoindustrial",
    value: "monoindustrial",
  },
];

const defineTheme = (theme: any) => {
  return new Promise<void>((res) => {
    Promise.all([
      loader.init(),
      import(`../themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export { monacoThemes, themsObject, defineTheme };
