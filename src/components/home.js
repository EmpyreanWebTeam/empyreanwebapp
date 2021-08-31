import '../App.css';
import '../style/styles.css';
import React from 'react';
import Room from '../images/speakeasyRoom3.jpeg';
import Slides from './slides';


class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="slider">
                <Slides />
            </div>
                <img src={Room} 
                     className="background" 
                     alt="background" 
                />
            </div>
            
        );
    }

}

export default Home;