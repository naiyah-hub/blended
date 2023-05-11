import * as React from "react";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { useState } from "react";

import "./Nav.css"

const Nav = ({ onAddNodeClick }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
    const handleLogoClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
    const handleSaveClick = () => {
        const input = document.querySelector('.family-tree-container');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            saveAs(imgData, 'family-tree.png');
          });
      };

    return(
        <nav>
            <link
            href= 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
            rel= "stylesheet"
            />   

            <div className="sidebar">
                
                <div className="logo" onClick={handleLogoClick}>
                    <i className='bx bx-menu menu-icon'></i>
                    <span className="logo-name"></span>
                </div>
                {/* <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}></div> */}
                <div className="sidebar-content">
                    <ul className="lists">
                        <li className="list">
                            <a href="#!" className="nav-link">
                                <i className="bx bx-home-alt icon"></i>
                                <span className="link">Dashboard</span>
                            </a>
                        </li>
                        <li className="list">
                            <a className="nav-link" onClick={onAddNodeClick}>
                                <i className='bx bxs-tree icon'></i>
                                <span className="link">Family Tree</span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#!" className="nav-link">
                                <i className='bx bxs-share icon' ></i>
                                <span className="link">Share</span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#!" className="nav-link" onClick={handleSaveClick}>
                            <i className='bx bxs-down-arrow-circle icon'></i>
                            <span className="link">Save</span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#!" className="nav-link">
                                <i className='bx bx-folder-open icon' ></i>
                                <span className="link">Files</span>
                            </a>
                        </li>

                        </ul>
                        <div className="bottom-content">
                             <li className="list">
                                 <a href="#!" className="nav-link">
                                    <i className='bx bx-log-out icon' ></i>
                                    <span className="link">Logout</span>
                                </a>
                            </li>
                        </div>
                </div>
            </div>
        </nav>

    )
}

export default Nav