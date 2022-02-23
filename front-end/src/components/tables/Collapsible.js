import { useState } from "react";

function Collapsible(props){
    const [isOpen, setIsopen] = useState(false);

    return(
        <div className="collapsible">
            <button 
            className="special-btn muted-btn"
            onClick={()=> setIsopen(!isOpen)}>
                {props.label}

            </button>
            {isOpen &&<div className="content">{props.children}</div>}
        </div>
    )
}

export default Collapsible;