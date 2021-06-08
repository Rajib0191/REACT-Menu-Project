import React, { useState } from 'react';
import Menu from './Menu';
import Catagories from './Catagories';
import items from './data';
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCatagories] = useState(allCategories);

  const filterItem = (category) =>{
    if(category === 'all'){
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category)
    setMenuItem(newItem);
  }
  return (
    <main>
      <section className = "menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Catagories categories={categories} filterItem={filterItem}/>
        <Menu items={menuItem}/>
      </section>
    </main>
  );
}

export default App;
