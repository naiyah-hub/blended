import * as React from "react";
import "./Navbar.css"

const MainNavBar = ({ onAddNodeClick }) => {
    return(
        <> 
        <nav id="main-nav">
        <h1>Blended</h1>
        <button id="add-node" onClick={onAddNodeClick}>Add Node</button>
        </nav>
        </>
    )
}

export default MainNavBar