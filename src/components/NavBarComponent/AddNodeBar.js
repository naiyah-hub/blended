import * as React from "react";
import "./Navbar.css"
// import { SideNav } from './SideNav';


const AddNodeBar = ({ onGoBackClick }) => {
    return (
    
        <nav id="add-node-nav" class="hidden">
            <button id="go-back" onClick={onGoBackClick} >Go Back</button>
            <form id="create-node-form">
                <label>
                    Name:
                    <input type="text" id="name" required/>
                </label>
                <label>
                    <input type="radio" name="relation" value="sibling" required/> Sibling
                </label>
                <label>
                    <input type="radio" name="relation" value="parent" required/> Parent
                </label>
                <label>
                    <input type="radio" name="relation" value="child" required/> Child
                </label>
                <label>
                    Alive:
                    <input type="checkbox" id="alive"/>
                </label>
                <button type="submit">Create Person</button>
            </form>
        </nav>
    )
  }




export default AddNodeBar