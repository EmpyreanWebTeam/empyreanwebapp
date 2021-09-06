import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import Hamburger from '../../images/avatar_logo_clear.png';
import '../../style/_swiper.scss';
import '../../style/_swiperLaptop.scss';
import '../../style/_swiperDesktop.scss';
// import '../../style/_swiperMobile.scss';


const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <div className="EEhamburger">
        <img className="shadowfilter" src={ Hamburger } alt="hamburger" />
      </div>
      {/* <span />
      <span />
      <span /> */}
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;