import React, { useState } from "react";

function App() {
  // State for both lists
  const [first1, setFist1] = useState([
    { title: "Apple", checked: false },
    { title: "Strawberry", checked: false },
    { title: "Mango", checked: false },
  ]);

  const [first2, setFist2] = useState([
    { title: "AMAZON", checked: false },
    { title: "STORY", checked: false },
    { title: "MARRIGE-APP", checked: false },
  ]);

  // Toggle the checked state for an item in List 1
  const handleToggle = (idx) => {
    const updatedList = [...first1];
    updatedList[idx].checked = !updatedList[idx].checked;
    setFist1(updatedList);
  };

  // Swap logic for all checked items
  const handleSwap = () => {
    const updatedList1 = [...first1];
    const updatedList2 = [...first2];

    updatedList1.forEach((item, idx) => {
      if (item.checked) {
        // Swap titles
        const temp = updatedList1[idx].title;
        updatedList1[idx].title = updatedList2[idx].title;
        updatedList2[idx].title = temp;

        // Uncheck after swap
        updatedList1[idx].checked = false;
      }
    });

    setFist1(updatedList1);
    setFist2(updatedList2);
  };

  return (
    <>
    <h1>Swapping Title </h1>
      <div>
        <h1>List 1</h1>
        <ul>
          {first1.map((item, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(idx)}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>List 2</h1>
        <ul>
          {first2.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSwap}>SWAP LIST ITEM</button>
    </>
  );
}

export default App;
