import React from "react";
import "./Nav.css"

const EditNodeBar = ({ onGoBackClick, onSubmit, member }) => {
  return (
    <nav className="edit-node-nav" id="edit-node-nav">
    <link
        href= 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
        rel= "stylesheet"
        />

      <label className="nav-link" onClick={onGoBackClick}>
        <i class='bx bx-arrow-back icon2'></i>
        <span className="link">Menu</span>
      </label>
      
      <form id="edit-node-form" onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" id="name" defaultValue={member.name} required/>
        </label>

        <label>
          DOB:
          <input type="text" id="dob" defaultValue={member.dob} required/>
        </label>
        <label>
          Avatar:
          <input type="text" id="avatar" defaultValue={member.avatar}/>
        </label>
        <label>
          Alive:
          <input type="checkbox" id="alive" defaultChecked={member.isAlive}/>
        </label>
        <label className="nav-link" onClick={(e) => { e.preventDefault(); e.target.closest('form').submit(); }}>
             <i class='bx bxs-check-circle icon2'></i>
          <span className="link">Update Member</span>
        </label>
      </form>
    </nav>
  )
}

export default EditNodeBar