import React ,{Component} from 'react'

class Header extends Component {
    constructor(props){
        super(props);        
    }

    render() {
        return (
          <div className="header">
                <a className="al-logo clearfix"><span>Flight</span> Logbook</a>
          </div>
        );
      }
}

export default Header;