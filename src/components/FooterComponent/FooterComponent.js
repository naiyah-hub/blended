import * as React from "react";
import "./FooterComponent.css"

function Footer (){
    return(
        <footer>
        <button id="zoom-out">🔍-</button>
        <button id="zoom-in">🔍+</button>
        <button id="fullscreen">🖵</button>
        <button id="share">🔗</button>
    </footer>
    )
}

export default Footer