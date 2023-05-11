import * as React from "react";
import "./FooterComponent.css"

function Footer ({onZoomIn, onZoomOut, onEnterFullscreen}){
    return(
      <footer>
        <link
          href= 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
          rel= "stylesheet"
        /> 
        <div class="footer-icon" onClick={onZoomIn}>
          <div class="sym">
            <i class='bx bx-zoom-in graphic'></i>
          </div>
        </div>
        <div class="footer-icon" onClick={onZoomOut}>
          <div class="sym">
            <i class='bx bx-zoom-out graphic'></i>
          </div>
        </div>
        <div class="footer-icon" onClick={onEnterFullscreen}>
          <div class="sym">
            <i class='bx bx-fullscreen graphic'></i>
          </div>
        </div>
        <div class="footer-icon">
          <div class="sym">
            <i class='bx bx-exit-fullscreen graphic-last'></i>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  