import { createContext, useState } from "react";
import Switch from "react-switch";
/*-----------------------------------------------*/
import Menu from './components/menu/menu';
import Categories from './components/categories/categories';
import items from './components/data/data';
/*-----------------------------------------------*/
import './scss/styles.scss';
/*----------------------------------------------*/
export const ThemeContext = createContext(null);
/*----------------------------------------------*/

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
 
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main id={theme}>
        <section className="menu container">
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
          <div className="title">
            <h2>our Menu Items</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems}></Categories>
          <Menu items={menuItems}></Menu>
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

