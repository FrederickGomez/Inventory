import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  
    const [activeTab, setActiveTab] = useState("Home");
   
    return (
    <div className='header'>
        <div className="logo">Inventario Operaciones</div>
        <div className="header-right">
            <Link to="/">
                <p className={`${activeTab === "Home"}`? "active" : ""} onClick={setActiveTab("Home")}>Home</p>
            </Link>
            <Link to="/add">
                <p className={`${activeTab === "AddProduct"}`? "active" : ""} onClick={setActiveTab("AddProduct")}>Agregar Producto</p>
            </Link>
        </div> 
    </div>
  )
}

export default Header