import React from 'react'

import {
    Link
} from "react-router-dom";

const DropDowns = ()=>{
   
        return (
            <div className="mx-4">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><Link className="dropdown-item " to="/business">Business</Link></li>
                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>

                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                        <li><Link className="dropdown-item" to="/music">Music</Link></li>
                    </ul>
                </div>
            </div>
        )
    
}

export default DropDowns