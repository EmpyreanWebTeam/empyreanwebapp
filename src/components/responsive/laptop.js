import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
// import ImageDepthMap from 'react-depth-map'

// Components
// import Fade from "../Fade";
import Slides from '../slides';

// Images
import Scifi from '../../images/speakeasyRoom3.jpeg';
// import Depth from '../../images/depthmap.jpg';

// Style
import "../../style/swiper.scss";
import "../../style/base.css";
// import "../../style/styles.css";


function Laptop() {
  // const [show] = useState(false);
    const Laptop = ({ children }) => {
        const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1549, minHeight: 687 })
        return isLaptop ? children : null
      }
        return (
          <Laptop>
            {/* <button className="hideButton"
                    onClick={() => setShow(show => !show)}>
              {show ? "hide" : "show"}
            </button> */}
            {/* <Fade show={show}> */}
              
                <div className="slider">
                  <Slides />
                </div>
              
            {/* </Fade> */}
            <div className="background">
              {/* <ImageDepthMap
                id="gl"
                originalImg={Scifi}
                depthImg={Depth}
                verticalThreshold={25}
                horizontalThreshold={15} 
                >
              </ImageDepthMap> */}
            </div>
          </Laptop>
    )
}

export default Laptop;