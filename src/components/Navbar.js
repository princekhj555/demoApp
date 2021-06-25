import React from 'react'
import "./Navbar.css"
import SearchIcon from '@material-ui/icons/Search';
function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
            <img className="logo" src="https://www.thrilleasy.com/images/logo.png" alt="logo"/>
           <ul className="tags">
               <l1>Lorem</l1>
               <l1>Lorem</l1>
               <l1>Lorem</l1>
               <l1>Lorem</l1>
               <l1>Lorem</l1>
           </ul>
            </div>
            <SearchIcon className="searchIcon"/>  
        </div>
    )
}

export default Navbar
