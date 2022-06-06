import React, {useEffect, useRef, useState} from "react";

const Dropdown = ({ options, selected, onSelect, item }) => {

  const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if(ref.current.contains(e.target)){
                return;
            }

            setOpen(false)};
        document.body.addEventListener('click', onBodyClick)
          
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, []);
  const rendered = options.map((option) => {
      if (option.value === selected.value) {
        return null;
      }
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onSelect(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">Select a {item}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {rendered}
            </div>
          </div>
        </div>
      </div>

      {/* <div><h2> style={{ color: selected.value }}>This is a {selected.value} text</h2></div> */}
    </div>
  );
  }

export default Dropdown
