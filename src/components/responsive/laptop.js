import React from "react";
import { useMediaQuery } from 'react-responsive';

// Components
import Slides from '../slides';


// Style
import "../../style/_swiper.scss";
import "../../style/_swiperLaptop.scss";
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
              
              
                <div className="background">
                  <Slides />
                </div>
              
          </Laptop>
    )
}

export default Laptop;