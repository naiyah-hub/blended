import * as React from "react";
import MainSideBar from "./Sidebar";
// import { SideNav } from './SideNav';


const AddNodeBar = ({ onGoBackClick , onSubmit }) => {
    return (
    
        <MainSideBar id="add-node-nav" class="hidden">
            <button id="go-back" onClick={onGoBackClick} >Go Back</button>
            <form id="create-node-form" onSubmit={onSubmit}>
                <label>
                    Name:
                    <input type="text" id="name" required/>
                </label>

                <label>
                    DOB:
                    <input type="text" id="dob" required/>
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
        </MainSideBar>
    )
  }


export default AddNodeBar