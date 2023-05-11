import React, { useState } from 'react';
import Nav from "../components/NavComponent/Nav"
import Sidebar from "../components/SideBarComponent/Sidebar"
import Footer from "../components/FooterComponent/FooterComponent"
import AddNodeBar from "../components/SideBarComponent/AddNodeBar"
import FamilyTree  from '../components/TreeComponent/familyTree';
import members, { addChild } from '../components/TreeComponent/family';

const App = () => {
  const [showAddNodeBar, setShowAddNodeBar] = useState(false);

  const handleAddNodeClick = () => {
    setShowAddNodeBar(true);
  };

  const handleGoBackClick = () => {
    setShowAddNodeBar(false);
  };
  
  const [currentMember, setCurrentMember] = useState(null);

  const handleMemberClick = (member) => {
    setCurrentMember(member);
  };

  // const [members, setFamilyMembers] = useState(members);

  const handleCreatePerson = (event) => {
    event.preventDefault();
  
    const name = event.target.name.value;
    const dob = event.target.dob.value;
    const relation = event.target.relation.value;
    const isAlive = event.target.alive.checked;
  
    const newMember = {
      name,
      dob,
      isAlive,
      children: [],
      avatar: "",
      id: Date.now(), //unique ID, timestamp
    };
    
    // if a current Member is selected 
    if (currentMember) {
    
      // Add the new member based on the selected relation
      switch (relation) {
        case "sibling":
          // Add sibling logic here
          break;
        case "parent":
          // Add parent logic here
          break;
        case "child":
          console.log("adding child ", newMember.name);
          // const updatedFamilyMembers = addChild(members, currentMember.id, newMember);
          // setFamilyMembers(updatedFamilyMembers);
          break;
        
        default:
          console.error("Invalid relation type:", relation);
      }
    }
    // Reset the form
    event.target.reset();
  };
  
  return (
    <div className="app">
      <Nav/>
      <div className="app-main-content">
        <div className="app-sidebar-container">

          {!showAddNodeBar && (
            <Sidebar onAddNodeClick={handleAddNodeClick} />
          )}
          {showAddNodeBar && (
            <AddNodeBar
              onGoBackClick={handleGoBackClick}
              onSubmit={handleCreatePerson}
            />
          )}
        </div>
        <div className="family-tree-container">
          <FamilyTree members={members} onMemberClick={handleMemberClick} />
          {currentMember && <p>Current member: {currentMember.name}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;