import * as React from "react";
import "./Nav.css"

const AddNodeBar = ({ onGoBackClick , onSubmit }) => {
    return (
    
        <nav className="add-node-nav" id="add-node-nav">
            <button id="go-back" onClick={onGoBackClick} >Menu</button>
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
                    Avatar:
                    <input type="text" id="avatar"/>
                </label>
                <label>
                    <input type="radio" name="relation" value="child" required/> Child
                </label>
                <label>
                    <input type="radio" name="relation" value="partner" required/> Partner
                </label>
                <label>
                    Alive:
                    <input type="checkbox" id="alive"/>
                </label>
                <button type="submit">Create Member</button>
            </form>
        </nav>
    )
  }


export default AddNodeBar