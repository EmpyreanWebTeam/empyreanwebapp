import React from "react";
import { useMediaQuery } from 'react-responsive';

// Components
import Slides from '../slides';

//Style
import "../../style/_swiper.scss";
import "../../style/_swiperDesktop.scss"
import "../../style/base.css";
// import "../../style/styles.css";


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
              
                <div className="background">
                  <Slides />
                </div>
              
          </Desktop>
    );
};

export default Desktop