import * as React from "react";

function MainSideBar({ onAddNodeClick }) {
    return (
        <>
            <div class="sidebar">
                <h1>Family Tree</h1>
                <button id="add-node" onClick={onAddNodeClick}>Add Person</button>
            </div>
        </>
    );
}

export default MainSideBar