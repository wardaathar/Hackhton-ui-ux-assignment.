import React from 'react';
import Menu from "../shopping/Shoplist";
import Menuco from "../components/Menupage";
import Chef from  "../components/chef"


const MenuPage: React.FC = () => {
  return (
    <div id="/menu">
       <Menu/>
       <Menuco/>
       <Chef/>
   </div>

  );
};

export default MenuPage;
