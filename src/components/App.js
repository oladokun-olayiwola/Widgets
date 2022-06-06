import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const options = [
  {
    label: "Standard Green",
    value: "green",
  },
  {
    label: "Blood Red",
    value: "red",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];



const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framework.",
  },
  {
    title: "Why use react?",
    content: "React is a favourite JS library among Engineers",
  },
  {
    title: "How do we use react?",
    content: "You use React by creating components",
  },
];


// const showAccordion = () => {
//   if(window.location.pathname === '/'){
//     return <Accordion items={items}/>
//   }
// };

// const showList = () => {
//   if(window.location.pathname === '/list'){
//     return <Search />
//   }
// };

// const showDropdown = () => {
//   if(window.location.pathname === '/dropdown'){
//     return <Dropdown />
//   }
// } 
// const showTranslate = () => {
//   if(window.location.pathname === '/translate'){
//     return <Translate />
//   }
// }







const App = () => {
 const [selected, setSelected] = useState(options[0]);


  return (
    <div>
      {/* {showAccordion()}
      {showDropdown()}
      {showList()}
      {showTranslate()} */}

      <Header />

      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} item="Language" selected={selected} onSelect={setSelected}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
    </div>
  );
};

export default App;
