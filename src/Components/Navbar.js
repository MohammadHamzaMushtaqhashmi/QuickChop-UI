import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import SignIn from './Login';
import SignUp from './Register';
import ForgotPassword from './ForgetPassoword';
import Chat from './Chat';
import Cashier from './Cashier';
import Modal from 'react-bootstrap/Modal';

function MyNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showCashier, setShowCashier] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const token = localStorage.getItem("accessToken");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      setIsLoggedIn(true);
    }
    if (token) {
      setToken(token);
    }
  }, [localStorage.getItem("user"), localStorage.getItem("accessToken")]);
  useEffect(() => {
    console.log(token); // Check the value of token
  }, [token]);

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  }

  const handleSignInClick = () => {
    setShowSignUp(false);
    setShowForgotPassword(false);
    setShowSignIn(true);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowForgotPassword(false);
    setShowSignUp(true);
  };

  const handleForgotPasswordClick = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowForgotPassword(true);
  };
  const styles = {
    dropdownMenu: {
      minWidth: '170px',
      backgroundColor: '#383a3e',
      boxShadow: '10px 10px 20px 0 rgb(0 0 0 / 70%)',
      padding: '0',
      borderRadius: '6px',
      left: 'initial',
      right: '0',
      marginTop: '0',
      zIndex: '99999',
    },
    firstBlock: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      padding: '15px 18px',
      backgroundColor: '#383a3e'
    },
    dropdownItem: {

      color: '#bebebe',
      fontSize: '13px',
    },
    checkbox: {
      float: 'right',
      marginRight: '-1.5em'
    },
    secondBlock: {
      backgroundColor: '#2c2d30',
      marginBottom: '10px',
    },
    thirdBlock: {
      backgroundColor: '#2c2d30',
    },
    backHome: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#383a3e'
    },
  };
  return (
    <div style={{
      boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.5)',
      fontWeight: 'bold',
    }}>
      <Navbar variant="dark" style={{ paddingTop: '0px', paddingBottom: '0px', marginLeft: '10px' }}>
        <Navbar.Brand href="#home" >Quick Chop</Navbar.Brand>
        <Nav className="ms-auto">
          <Dropdown>
            <Dropdown.Toggle variant='dark' id="dropdown-basic" style={{ backgroundColor: '#2c2d30', borderRadius: '10px', marginRight: '10px' }}>
              <img src={process.env.PUBLIC_URL + '/Menu-bar.svg'} alt='Menu-bar' />
            </Dropdown.Toggle>

            <Dropdown.Menu style={styles.dropdownMenu}>

              <div style={styles.firstBlock}>
                <Dropdown.Item href="#profile"><img src={process.env.PUBLIC_URL + '/default_profile_pic.png'} alt="Profile" style={{
                  width: '40px',
                  height: '40px',
                  minWidth: '40px',
                  minHeight: '40px',
                  borderRadius: '50%',
                }} />
                </Dropdown.Item>
                <Dropdown.Item href="#username">Username</Dropdown.Item>
                <Dropdown.Item href="#change-avatar" style={styles.dropdownItem}><i className="fas fa-image"></i></Dropdown.Item>
              </div>
              <div style={styles.secondBlock}>
                <Dropdown.Item href="#sound" style={styles.dropdownItem}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span><i className="fas fa-volume-up"></i><span style={{ paddingLeft: '10px' }}>Sound</span></span>
                    <div onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#music" style={styles.dropdownItem}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span><i className="fas fa-music"></i><span style={{ paddingLeft: '10px' }}>Music</span></span>
                    <div onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#animation" style={styles.dropdownItem}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span><i className="fas fa-film"></i><span style={{ paddingLeft: '10px' }}>Animation</span></span>
                    <div onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </div>
                  </div>
                </Dropdown.Item>
              </div>
              <div style={styles.thirdBlock}>
                <Dropdown.Item href="#free-bets" style={styles.dropdownItem}><i className="fas fa-gift"></i><span style={{ paddingLeft: '10px' }}>Free Bets</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#provably-fair-settings" style={styles.dropdownItem}> <i className="fas fa-cog"></i><span style={{ paddingLeft: '10px' }}>Provably Fair settings</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#game-rules" style={styles.dropdownItem}><i className="fas fa-book"></i><span style={{ paddingLeft: '10px' }}>Game Rules</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#my-bet-history" style={styles.dropdownItem}><i className="fas fa-history"></i><span style={{ paddingLeft: '10px' }}>My bet history</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#game-limit" style={styles.dropdownItem}><i className="fas fa-stopwatch"></i><span style={{ paddingLeft: '10px' }}>Game limit</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#support" style={styles.dropdownItem}><i className="fas fa-life-ring"></i><span style={{ paddingLeft: '10px' }}>Support</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#how-to-play" style={styles.dropdownItem}><i className="fas fa-question-circle"></i><span style={{ paddingLeft: '10px' }}>How to play</span></Dropdown.Item>
              </div>
              <div style={styles.backHome}>
                <Dropdown.Item href="#home" style={styles.dropdownItem}><i className="fas fa-home"></i><span style={{ paddingLeft: '10px' }}>Back to home</span></Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#chat" style={{ backgroundColor: '#2c2d30', borderRadius: '10px', marginRight: '5px' }} onClick={() => setShowChat(true)}>
            <img src={process.env.PUBLIC_URL + '/icon-chatBar.svg'} alt='Chat-bar' />
          </Nav.Link>
          {isLoggedIn ? (
            <>
              <Button variant='dark' onClick={() => setShowCashier(true)} style={{ background: 'none', backgroundColor: '#2c2d30', color: '#bebebe', fontSize: '10px' }}>CASHIER</Button>
              <Nav.Link>{user.userName}</Nav.Link>
              <Nav.Link href="#home" style={{ backgroundColor: '#2c2d30', borderRadius: '10px', marginRight: '10px', color: '#bebebe' }}>{`$${user.balance}.00`}</Nav.Link>
              <Button variant='dark' onClick={handleLogout} style={{ background: 'none', backgroundColor: '#2c2d30', color: '#bebebe', fontSize: '10px' }}>LOGOUT</Button>
            </>
          ) : (
            <>
              <Button variant='dark' onClick={() => setShowSignIn(true)} style={{ background: 'none', backgroundColor: '#2c2d30', color: '#bebebe', fontSize: '10px' }}>Login</Button>
              <Button variant='dark' onClick={() => setShowSignUp(true)} style={{ background: 'none', backgroundColor: '#2c2d30', color: '#bebebe', fontSize: '10px' }}>Register</Button>
            </>
          )}
        </Nav>
      </Navbar>

      <Modal show={showSignIn} onHide={() => setShowSignIn(false)} style={{ borderRadius: '10px' }} >
        <Modal.Body style={{ padding: '0px', borderRadius: '10px' }}>
          <SignIn
            onSignUpClick={handleSignUpClick}
            onForgotPasswordClick={handleForgotPasswordClick}
            onSignIn={() => setShowSignIn(false)}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)} style={{ borderRadius: '10px' }} >
        <Modal.Body style={{ padding: '0px', borderRadius: '10px' }} >
          <SignUp
            onSignInClick={handleSignInClick}
            onSignUp={() => setShowSignUp(false)}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showForgotPassword} onHide={() => setShowForgotPassword(false)} style={{ borderRadius: '10px' }}>
        <Modal.Body style={{ padding: '0px', borderRadius: '10px' }}>
          <ForgotPassword />
        </Modal.Body>
      </Modal>
      <Modal show={showChat} onHide={() => setShowChat(false)} >
        <Modal.Body style={{ padding: '0', border: '2px solid green' }}>
          <Chat username={user?.userName} token={token} />
        </Modal.Body>
      </Modal>
      {token && <Modal show={showCashier} onHide={() => setShowCashier(false)}>
        <Modal.Body style={{padding:'0'}}>
          <Cashier token={token} />
        </Modal.Body>
      </Modal>
      }

    </div>
  );
}

export default MyNavbar;
