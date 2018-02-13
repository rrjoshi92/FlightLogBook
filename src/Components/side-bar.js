
import React ,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'

class SideBar extends Component {
    constructor(props){
        super(props);        
    }

    render() {
        return (
            <div className="sidebar slimScrollDiv">                
                <ul className="al-sidebar-list">                    
                    <Link to="/">
                        <li className="al-sidebar-list-item">
                            <a className="al-sidebar-list-link">
                                <FontAwesomeIcon icon={faHome} />   
                                Home
                            </a>
                        </li>
                    </Link>
                    <Link to="flight">
                        <li className="al-sidebar-list-item">
                            <a className="al-sidebar-list-link">
                                <FontAwesomeIcon icon={faHome} />   
                                Detail
                            </a>
                        </li>
                    </Link>                    
                </ul>                
            </div>
        );
    }
}

export default SideBar;