import * as React from "react";
import { Link } from "gatsby";

function Nav(){
    return(
        <nav>
            <link
            href= 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
            rel= "stylesheet"
            />   

            <div class="logo">
                <i class='bx bx-menu menu-icon'></i>
                <span class="logo-name">Blended</span>
            </div>

            <div class="sidebar">
                <div class="logo">
                    <i class='bx bx-menu menu-icon'></i>
                    <span class="logo-name">Blended</span>
                </div>


                <div class="sidebar-content">
                    <ul class="lists">
                        <li class="list">
                            <a href="#" class="nav-link">
                                <i class="bx bx-home-alt icon"></i>
                                <span class="link">Dashboard</span>
                            </a>
                        </li>
                        <li class="list">
                            <Link class="nav-link">
                                <i class='bx bxs-tree icon'></i>
                                <span class="link">Family Tree</span>
                            </Link>
                        </li>
                        <li class="list">
                            <a href="#" class="nav-link">
                                <i class='bx bxs-share icon' ></i>
                                <span class="link">Share</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="#" class="nav-link">
                                <i class='bx bxs-down-arrow-circle icon'></i>
                                <span class="link">Save</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="#" class="nav-link">
                                <i class='bx bx-folder-open icon' ></i>
                                <span class="link">Files</span>
                            </a>
                        </li>

                        </ul>
                        <div class="bottom-content">
                             <li class="list">
                                 <a href="#" class="nav-link">
                                    <i class='bx bx-log-out icon' ></i>
                                    <span class="link">Logout</span>
                                </a>
                            </li>
                        </div>
                </div>
            </div>
        </nav>


    )
}

export default Nav