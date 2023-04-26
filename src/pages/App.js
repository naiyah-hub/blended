import React, { useState } from 'react';
import Header from "../components/HeaderComponent/Header"
import Navbar from "../components/NavBarComponent/Navbar"
import Footer from "../components/FooterComponent/FooterComponent"
import AddNodeBar from "../components/NavBarComponent/AddNodeBar"
// import FamilyTree from './components/FamilyTree/FamilyTree';

// const familyData = {
//   // ... your family data
// };


const App = () => {
    const [showAddNodeBar, setShowAddNodeBar] = useState(false);
  
    const handleAddNodeClick = () => {
      setShowAddNodeBar(true);
    };
  
    const handleGoBackClick = () => {
      setShowAddNodeBar(false);
    };
  
    return (
      <div className="app">
        <Header />
        {!showAddNodeBar && <Navbar onAddNodeClick={handleAddNodeClick} />}
        {showAddNodeBar && <AddNodeBar onGoBackClick={handleGoBackClick} />}
        <main>
          {/* <h1>Family Tree</h1> */}
        </main>
        <Footer />
      </div>
    );
  };
  
  export default App;