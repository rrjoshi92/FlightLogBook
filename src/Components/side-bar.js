
import React ,{Component} from 'react'
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faGlobe, faPlusCircle } from '@fortawesome/fontawesome-free-solid'

class SideBar extends Component {    

    render() {
        return (
            <div className="sidebar slimScrollDiv">                
                <ul className="al-sidebar-list">                                        
                    <li  className="al-sidebar-list-item">
                        <Link to="/" className="al-sidebar-list-link">
                            <FontAwesomeIcon icon={faHome} />   
                            Home
                        </Link>
                    </li>      
                    <li className="al-sidebar-list-item">
                        <Link to="/addflight" className="al-sidebar-list-link">
                            <FontAwesomeIcon icon={faPlusCircle} />   
                            Add new flight
                        </Link>
                    </li>                    
                    <li className="al-sidebar-list-item">
                        <Link to="about" className="al-sidebar-list-link">
                            <FontAwesomeIcon icon={faGlobe} />   
                            About
                        </Link>
                    </li>                    
                </ul>                
            </div>
        );
    }
}

export default SideBar;