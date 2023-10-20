import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./index.css";

// Content is a different type of component

const Content = () => {
  // current state of our app
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound of Cocoa covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: true,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  function handleCheck(id) {
    // iterating through the list of items and making...
    // the neccessary changes.
    const listItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    console.log(listItems);
    setItems(listItems);
    // to make our state persistent we will use localstorage
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {

    // this array will only have items with the id...
    // not equal to the item id.
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

  };

  return (
    <main>
        {items.length ? (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheck(item.id);
              }}
              checked={item.checked}
            />

            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => {
                handleCheck(item.id);
              }}
            >
              {item.item}
            </label>

            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => {
                handleDelete(item.id);
              }}
            />
          </li>
        ))}
      </ul>): (
        <p style={{ marginTop: '2rem' }}>
            Your list is empty
        </p>
      )}
    </main>
  );
};

export default Content;
