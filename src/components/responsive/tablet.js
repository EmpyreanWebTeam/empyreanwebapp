import React from "react";
import { useMediaQuery } from 'react-responsive'

import Slides from '../slides'

import "../../style/_swiper.scss";

function Tablet() {
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
      }
        return (
          <Tablet>
            <div className="background">
              <Slides />
            </div>
          </Tablet>
    )
}

export default Tablet;