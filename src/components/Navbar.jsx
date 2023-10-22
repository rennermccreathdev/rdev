// import React from 'react';
// import { Link } from 'react-router-dom'
// import "./componentstyle.css"


// const Navbar = () => {
//   return (
//     <nav class="nav">
//       <ul>
//         <li><Link to='/'>home</Link></li>
//         <li><Link to='/bio'>bio</Link></li>
//         <li><Link to='/portfolio'>portfolio</Link></li>
//         <li><Link to='/contact'>contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom'
// import "./componentstyle.css"


// const Navbar = () => {


//   return (
//     <header className="header" id="header">
//       <nav class="nav navbar container">
//         <div className="burger" id="burger">
//           <span className="burger__line"></span>
//           <span className="burger__line"></span>
//           <span className="burger__line"></span>
//         </div>
//         <div className="menu" id="menu">
//           <ul class="menu__inner">
//             <li class="menu__item"><Link to='/'>home</Link></li>
//             <li class="menu__item"><Link to='/bio'>bio</Link></li>
//             <li class="menu__item"><Link to='/portfolio'>portfolio</Link></li>
//             <li class="menu__item"><Link to='/contact'>contact</Link></li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './componentstyle.css';

// class Navbar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isBurgerActive: false,
//       isHeaderOnScroll: false,
//     };

//     this.handleBurgerClick = this.handleBurgerClick.bind(this);
//     this.handleMenuLinkClick = this.handleMenuLinkClick.bind(this);
//     this.handleScroll = this.handleScroll.bind(this);
//   }

//   handleBurgerClick() {
//     this.setState((prevState) => ({
//       isBurgerActive: !prevState.isBurgerActive,
//     }));
//   }

//   handleMenuLinkClick() {
//     this.setState({
//       isBurgerActive: false,
//     });
//   }

//   handleScroll() {
//     if (window.scrollY >= 85) {
//       this.setState({ isHeaderOnScroll: true });
//     } else {
//       this.setState({ isHeaderOnScroll: false });
//     }
//   }

//   componentDidMount() {
//     const burgerMenu = document.getElementById('burger');
//     const navbarMenu = document.getElementById('menu');
//     const headerMenu = document.getElementById('header');

//     if (burgerMenu && navbarMenu) {
//       burgerMenu.addEventListener('click', this.handleBurgerClick);
//     }

//     document.querySelectorAll('.menu__item').forEach((link) => {
//       link.addEventListener('click', this.handleMenuLinkClick);
//     });

//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   render() {
//     const { isBurgerActive, isHeaderOnScroll } = this.state;

//     const burgerClass = isBurgerActive ? 'is-active' : '';
//     const headerClass = isHeaderOnScroll ? 'on-scroll' : '';

//     return (
//       <header className={`header ${headerClass}`} id="header">
//         <nav className="nav navbar container">
//           <div className={`burger ${burgerClass}`} id="burger">
//             <span className="burger__line"></span>
//             <span className="burger__line"></span>
//             <span className="burger__line"></span>
//           </div>
//           <div className="menu" id="menu">
//             <ul className="menu__inner">
//               <li className="menu__item" onClick={this.handleMenuLinkClick}>
//                 <Link to='/'>home</Link>
//               </li>
//               <li className="menu__item" onClick={this.handleMenuLinkClick}>
//                 <Link to='/bio'>bio</Link>
//               </li>
//               <li className="menu__item" onClick={this.handleMenuLinkClick}>
//                 <Link to='/portfolio'>portfolio</Link>
//               </li>
//               <li className="menu__item" onClick={this.handleMenuLinkClick}>
//                 <Link to='/contact'>contact</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     );
//   }
// }

// export default Navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './componentstyle.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBurgerActive: false,
    };

    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick() {
    this.setState((prevState) => ({
      isBurgerActive: !prevState.isBurgerActive,
    }));
  }

  render() {
    const { isBurgerActive } = this.state;

    const burgerClass = isBurgerActive ? 'is-active' : '';

    return (
      <header className="header" id="header">
        <nav className="nav navbar container">
          <div className={`burger ${burgerClass}`} id="burger" onClick={this.handleBurgerClick}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
          </div>
          <div className={`menu ${burgerClass}`} id="menu">
            <ul className="menu__inner">
              <li className="menu__item">
                <Link to='/' onClick={this.handleBurgerClick}>home</Link>
              </li>
              <li className="menu__item">
                <Link to='/bio' onClick={this.handleBurgerClick}>bio</Link>
              </li>
              <li className="menu__item">
                <Link to='/portfolio' onClick={this.handleBurgerClick}>portfolio</Link>
              </li>
              <li className="menu__item">
                <Link to='/contact' onClick={this.handleBurgerClick}>contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
