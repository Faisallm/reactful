import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
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
    <div>
      {/* header, content and footer functional container. */}
      <Header title="Groceries" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
      {/* we can add styles using styled components */}
    </div>
  );
}

export default App;
