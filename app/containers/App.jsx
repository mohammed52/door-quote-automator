import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import Navigation from '../containers/Navigation';
// import Message from '../containers/Message';
import styles from '../css/main';
import MEK from '../images/MEK.png';
import favicon from '../images/favicon.png';
// import MEK from '../images/MEK.png';


var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var Nav = ReactBootstrap.Nav;
var MenuItem = ReactBootstrap.MenuItem;

// const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
// const App = ({children}) => {
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cssHasLoaded: false
    }
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {

    console.log("AppContainer componentDidMount");

    window.addEventListener('load', this.handleLoad);
  }
  handleLoad() {
    console.log("handleLoad"); //  $ is available here
    this.setState({
      cssHasLoaded: true
    })
  }

  componentDidUpdate() {
    console.log("AppContainer componentDidUpdate");
    const ss = document.styleSheets
    console.log("ss.length", ss.length);
  }

  render() {

    return (
      <div>
        {!this.state.cssHasLoaded ? <div className={styles.loading}>
                                      Loading...
                                    </div> :
         <div className={styles.mainWrapper}>
           <Navbar>
             <Navbar.Header>
               <Navbar.Brand>
                 <a href="#"><img src={MEK} width="90" height="20" /></a>
               </Navbar.Brand>
             </Navbar.Header>
             <Nav pullRight>
               <NavItem eventKey={1} disabled>
                 <strong>Helpline: 021-34530931</strong>
               </NavItem>
             </Nav>
           </Navbar>
           {this.props.children}
         </div>}
        <div className={styles.loading}>
          Loading...
        </div>
      </div>
      );
  }
  ;
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
