import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert"

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Hausa",
    value: "ha",
  },
  {
    label: "Igbo",
    value: "ig",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Estonia",
    value: "et",
  },
  {
    label: "Spanish",
    value: "es",
  },
];


const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
      <div>
        <div className="ui form">
          <div className="ui field">
            <label>Enter Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <Dropdown
          options={options}
          selected={language}
          onSelect={setLanguage}
          item={"Language"}
        />
        <hr />
        <Convert text={text} language={language}/>
      </div>
    );
}
export default Translate;