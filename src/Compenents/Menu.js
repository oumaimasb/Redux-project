import React from "react";
import "../Styles/Menu.css";
import { menuItemsData } from "./Data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <main>
      {menuItemsData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Menu;
