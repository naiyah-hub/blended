import * as React from "react";
import "./FooterComponent.css"

function Footer({onZoomIn, onZoomOut, onEnterFullscreen}) {
    return(
      <footer>
        <link
          href= 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
          rel= "stylesheet"
        /> 
        <button className="footer-icon" onClick={onZoomIn}>
          <div className="sym">
            <i className='bx bx-zoom-in graphic'></i>
          </div>
        </button>
        <button className="footer-icon" onClick={onZoomOut}>
          <div className="sym">
            <i className='bx bx-zoom-out graphic'></i>
          </div>
        </button>
        <button className="footer-icon" onClick={onEnterFullscreen}>
          <div className="sym">
            <i className='bx bx-fullscreen graphic'></i>
          </div>
        </button>
      </footer>
    )
}

export default Footer