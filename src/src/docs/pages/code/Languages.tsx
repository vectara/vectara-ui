import { useState } from "react";
import { VuiCode, VuiSelect, VuiSpacer } from "../../../lib";

const languageToSampleMap = {
  None: `import React from "react";

type Props = {
  value: string;
};

export const Example = ({ name }: Props) => (
  <div className="example">{name}</div>
);`,

  tsx: `import React from "react";

type Props = {
  value: string;
};

export const Example = ({ name }: Props) => (
  <div className="example">{name}</div>
);`,

  jsx: `import React from "react";

export const Example = ({ name }) => (
  <div className="example">{name}</div>
);`,

  ts: `type Config = {
  value: string;
};

export const sayValue = ({ value }: Config) => {
  console.log(value);
};`,

  js: `export const sayValue = ({ value }) => {
  console.log(value);
};`
} as const;

type Language = keyof typeof languageToSampleMap;

export const Languages = () => {
  const [language, setLanguage] = useState<Language>("tsx");

  return (
    <>
      <VuiSelect
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        options={Object.keys(languageToSampleMap).map((language) => ({
          text: language,
          value: language
        }))}
      />

      <VuiSpacer size="s" />

      <VuiCode language={language === "None" ? undefined : language}>{languageToSampleMap[language]}</VuiCode>
    </>
  );
};
