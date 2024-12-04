import React, { useState, useEffect } from "react";
import axios from "axios";

import OutputWindow from "./OutputWindow";
import { languageOptions } from "./constants/languageOptions";
import LanguagesDropdown from "./LanguagesDropdown";
import CodeEditorWindow from "./CodeEditorWindow";

const javascriptDefault = `
const fruits = ['banana', 'apple', 'cherry', 'date'];

// Sorting in alphabetical order (default behavior)
fruits.sort();
console.log("Sorted alphabetically:", fruits);

// Sorting in reverse alphabetical order
fruits.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", fruits);
`;

const Landing = () => {
  const [code, setCode] = useState(javascriptDefault);
  // const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  // const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const onSelectChange = (sl) => {
    console.log("Selected option: ", sl);
    setLanguage(sl);
  };

  const handleCodeChange = (action, data) => {
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

  const handleCompile = async () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
    };

    const options = {
      method: "POST",
      url: import.meta.env.VITE_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*", wait: "true" },
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
      data: formData,
    };

    try {
      const response = await axios.request(options);
      console.log("Execution Result", response.data);

      setOutputDetails(response.data);
    } catch (err) {
      let error = err.response ? err.response.data : err;
      let status = err.response?.status;
      console.log("Error:", error);
      if (status === 429) {
        console.log("Too many requests");
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <div>
        <LanguagesDropdown onSelectChange={onSelectChange} />
      </div>
      <div>
        <div>
          <CodeEditorWindow
            code={code}
            handleCodeChange={handleCodeChange}
            language={language?.value}
            // theme={theme.value}
          />
        </div>
        <div>
          <OutputWindow outputDetails={outputDetails} />
          <button
            onClick={handleCompile}
            disabled={processing || !code}
            className={`bg-green-500 text-white ${
              processing || !code ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {processing ? "Processing..." : "Compile"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
