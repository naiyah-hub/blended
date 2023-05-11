import React, { useState, useRef } from 'react';
import Nav from "../components/NavBarComponent/Nav"
import Footer from "../components/FooterComponent/FooterComponent"
import AddNodeBar from "../components/NavBarComponent/AddNodeBar"
import FamilyTree  from '../components/TreeComponent/familyTree';
import initialFamily, { addChild, addPartner} from '../components/TreeComponent/family';
import Header from "../components/HeaderComponent/Header";
import EditNodeBar from "../components/NavBarComponent/EditNodeBar";


const App = () => {

  const contentContainerRef = useRef(null);

  const [showAddNodeBar, setShowAddNodeBar] = useState(false);
  const [showEditNodeBar, setShowEditNodeBar] = useState(false);


  const handleAddNodeClick = () => {
    setShowAddNodeBar(true);
  };
  
  
  const handleGoBackClick = () => {
    setShowAddNodeBar(false);
    setShowEditNodeBar(false);
  };
  
  const handleEditNodeClick = () => {
    setShowEditNodeBar(true);
    setShowAddNodeBar(false); // hide the AddNodeBar if it's visible
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

  const handleEditPerson = (event, id) => {
    event.preventDefault();
  
    const name = event.target.name.value;
    const dob = event.target.dob.value;
    const avatar = event.target.avatar.value;
    const isAlive = event.target.alive.checked;
  
    const updateMember = (members) => {
      return members.map(member => {
        if (member.id === id) {
          return {
            ...member,
            name,
            dob,
            avatar,
            isAlive,
          }
        } else if (member.children.length > 0) {
          return {
            ...member,
            children: updateMember(member.children)
          }
        } else {
          return member;
        }
      });
    }
  
    setFamilyMembers(updateMember(family));
  
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
          {!showAddNodeBar && !showEditNodeBar && (
              <Nav onAddNodeClick={handleAddNodeClick} onEditNodeClick={handleEditNodeClick} />
          )}
          {showAddNodeBar && (
              <AddNodeBar 
              className="add-node-nav" 
              id="add-node-nav"
              onGoBackClick={handleGoBackClick}
              onSubmit={handleCreatePerson}
              currentMember={currentMember}
              onEditClick={handleEditNodeClick}
            />
          )}
          {showEditNodeBar && currentMember && (
              <EditNodeBar 
                  onGoBackClick={handleGoBackClick}
                  onSubmit={(e) => handleEditPerson(e, currentMember.id)}
                  member={currentMember}
              />
          )}
        </div>
        
        <div className="content-container" ref={contentContainerRef}>
          <div className="family-tree-container">
            <FamilyTree members={family} onMemberClick={handleMemberClick} />
          </div>
          {currentMember && (
            <div className="current-member-container">
              <p>Current Member: {currentMember.name}</p>
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