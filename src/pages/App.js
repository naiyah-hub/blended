import React, { useState, useRef } from 'react';
import Nav from "../components/NavBarComponent/Nav"
import Footer from "../components/FooterComponent/FooterComponent"
import AddNodeBar from "../components/NavBarComponent/AddNodeBar"
import FamilyTree  from '../components/TreeComponent/familyTree';
import initialFamily, { addChild, addPartner} from '../components/TreeComponent/family';
import Header from "../components/HeaderComponent/Header";

const App = () => {

  const contentContainerRef = useRef(null);

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

  const [family, setFamilyMembers] = useState(initialFamily);

  const handleCreatePerson = (event) => {
    event.preventDefault();
  
    const name = event.target.name.value;
    const dob = event.target.dob.value;
    const avatar = event.target.name.avatar;
    const relation = event.target.relation.value;
    const isAlive = event.target.alive.checked;
  
    const newMember = {
      name: name,
      dob: dob,
      avatar: avatar,
      isAlive: isAlive,
      children: [],
      avatar: "",
      partner: {},
      id: Date.now(), //unique ID, timestamp
    };
    
    // if a current Member is selected 
    if (currentMember) {
    
      // Add the new member based on the selected relation
      switch (relation) {
        case "partner":
          console.log("adding partner ", newMember.name);
          
          // if there are no current partners
          if (!currentMember.partner) {
            const updatedFamilyWithPartner = addPartner(family, currentMember.id, newMember);
            setFamilyMembers(updatedFamilyWithPartner);
          }
          
          break;

        case "child":
          console.log("adding child ", newMember.name);
          const updatedFamilyMembers = addChild(family, currentMember.id, newMember);
          setFamilyMembers(updatedFamilyMembers);
          break;
  
          default:
          console.error("Invalid relation type:", relation);
      }
    }
    // Reset the form
    event.target.reset();
  };

  const handleZoomIn = () => {
    if (contentContainerRef.current) {
      contentContainerRef.current.style.transform = 'translate(-50%, -50%) scale(1.1)';
    }
  };
  
  const handleZoomOut = () => {
    if (contentContainerRef.current) {
      contentContainerRef.current.style.transform = 'translate(-50%, -50%) scale(0.9)';
    }
  };
  
  const handleEnterFullscreen = () => {
    if (contentContainerRef.current) {
      if (contentContainerRef.current.requestFullscreen) {
        contentContainerRef.current.requestFullscreen();
      } else if (contentContainerRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        contentContainerRef.current.webkitRequestFullscreen();
      }
      contentContainerRef.current.style.position = "absolute";
      contentContainerRef.current.style.top = "50%";
      contentContainerRef.current.style.left = "50%";
      contentContainerRef.current.style.transform = "translate(-50%, -50%)";
    }
  };

  return (
    <div className="app">
        <Header />
        
        <div className="app-sidebar-container">
          {!showAddNodeBar && (
            <Nav onAddNodeClick={handleAddNodeClick} />
          )}
          {showAddNodeBar && (
            <AddNodeBar className = "add-node-nav" id="add-node-nav"
              onGoBackClick={handleGoBackClick}
              onSubmit={handleCreatePerson}
            />
          )}      
        </div>
        
        <div className="content-container" ref={contentContainerRef}>
          <div className="family-tree-container">
            <FamilyTree members={family} onMemberClick={handleMemberClick} />
          </div>
          {currentMember && (
            <div className="current-member-container">
              <p>Current member: {currentMember.name}</p>
            </div>
          )}
        </div>
      
      <div className="app-footer">
        <Footer 
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onEnterFullscreen={handleEnterFullscreen}
        />
      </div>
    </div>
  );
};

export default App;