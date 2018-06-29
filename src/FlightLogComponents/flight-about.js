import React ,{Component} from 'react'

class About extends Component {
    constructor(props){       
        super(props);                      
        
    }

    render() {        
        return(
            <div id="about">
                <div className="self-image-container">
                    <img className="self-image" src="./images/self.jpg"/>
                </div>
                <div className="info">
                    <p>
                        Hello Folks, My name is Ravi Joshi and I work as a UI developer for 4 years.
                        Javascript holds a special place in my heart...I like to work on the latest UI technologies like,
                        HTML-5, CSS-3 and flavors like SCSS. I started my career with vanilla JS, Jquery, and ASP.net. During my 4 years journey
                        I got opportunities to work on multiple JS frameworks like Backbone, Knockout and Angular.                        
                    </p>
                    <p>
                    I created this project just to get my hands dirty with React, Redux, and firebase. I used React and Redux as
                    front-end framework and used firebase API to store data into google firebase database. As this project is focused on the React and Redux 
                    it is not mobile device compatible. But I am still working on it in future I will try to integrate Bootstrap to make it device friendly. But no promise no guarantee....          
                    </p>

                </div>
            </div>
        )
    }
}

export default About;