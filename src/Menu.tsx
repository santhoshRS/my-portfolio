import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';

const Menu: React.FC = () => {

    return (
        <div className="menu">
            <a className="menu-list" href='/'>@santhoshRS</a>
            <a className="menu-list" href='/Blog'>Blog</a>
            <a className="menu-list" href='https://github.com/santhoshRS' target='_blank'>Projects</a>
        </div>
    );
};


export default Menu;