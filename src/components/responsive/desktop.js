import React from "react";
import { useMediaQuery } from 'react-responsive';
import ImageDepthMap from 'react-depth-map'

// Components
import Slides from '../slides';
import FadeInAnimation from "../FadeInAnimation";

//Style
import "../../style/swiper.scss";
import "../../style/base.css";
// import "../../style/styles.css";

// Images
import Room from '../../images/speakeasyRoom3.jpeg';
import Depth from '../../images/depthmap.jpg';

function Desktop() {
    // const [show, setShow] = useState(false);
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1550 })
        return isDesktop ? children : null
      }
        return (
          <Desktop>
            {/* <button className="hideButton"
                    onClick={() => setShow(show => !show)}>
              {show ? "hide" : "show"}
            </button> */}
            <div>
              <FadeInAnimation direction="up">
                <div className="slider">
                  <Slides />
                </div>
              </FadeInAnimation>
              
            
              <ImageDepthMap
                id="gl"
                originalImg={Room}
                depthImg={Depth}
                verticalThreshold={25}
                horizontalThreshold={15} > 
              </ImageDepthMap>
            </div>
          </Desktop>
    );
};

export default Desktop