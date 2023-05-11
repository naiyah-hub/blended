import React from "react";
import "./Nav.css"

const AddNodeBar = ({ onGoBackClick, onSubmit, onEditClick, currentMember }) => {
    return (
        <nav className="add-node-nav" id="add-node-nav">
            <link
                href= 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
                rel= "stylesheet"
            />
            <label className="nav-link" onClick={onGoBackClick}>
                <i class='bx bx-arrow-back icon2'></i>
                <span className="link">Menu</span>
            </label>
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
                <label className="nav-link" onClick={(e) => { e.preventDefault(); e.target.closest('form').submit(); }}>
                    <i class='bx bxs-check-circle icon2'></i>
                    <span className="link">Create Member</span>
                </label>
            
            {currentMember && (
                <label className="nav-link" onClick={onEditClick}>
                    <i class='bx bxs-edit icon2'></i>
                    <span className="link">Edit Member</span>
                </label>
            )}
            </form>
        </nav>
    )
}

export default AddNodeBar