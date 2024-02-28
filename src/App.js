import React, { useState, useEffect } from 'react';
import MyNavbar from './Components/Navbar';
import LeftSection from './Components/LeftSection';
import AllBetsInterface from './Components/AllBetsInterface';
import MyBetsInterface from './Components/MyBetsInterface';
import TopBetsInterface from './Components/TopBetsInterface';
import RightSection from './Components/RightSection';
import MainContent from './Components/MainContent';
import BettingOption from './Components/BettingOption';
import Foooter from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [selectedButton, setSelectedButton] = useState('all');
  const [isSecondOptionVisible, setIsSecondOptionVisible] = useState(true)
  const [token, setToken] = useState(null)
  const [socket, setsocket] = useState();
  const [showtoast, setshowtoast] = useState(false);
  const [LiveBettingTable, setLiveBettingTable] = useState([]);
  const [RoundIdList, setRoundIdList] = useState([]);
  const [onlinePlayers, setonlinePlayers] = useState([]);
  const [chat, setchat] = useState([]);
  const [showprofittoast, setshowprofittoast] = useState(false);
  const [BustedValue, setBustedValue] = useState('');
  const [Logs, setLogs] = useState([]);

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  return (
    <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MyNavbar />
      <Container fluid style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Row className="flex-column-reverse flex-lg-row">
          <Col xs={12} lg={3} style={{ display: 'flex', flexDirection: 'column', height: 'calc(106vh - 78px)', paddingRight:'0' }}>
            <LeftSection onButtonClick={handleButtonClick} selectedButton={selectedButton} />
              {selectedButton === 'all' && <AllBetsInterface />}
              {selectedButton === 'my' && <MyBetsInterface />}
              {selectedButton === 'top' && <TopBetsInterface />}
            <Foooter /> {/* Render the footer here */}
          </Col>
          <Col xs={12} lg={9} style={{ height: 'calc(104vh - 78px)', display: 'flex', flexDirection: 'column', }}>
            <RightSection />
            <MainContent />
            <Row style={{ flex: 1 }}>
              <Col xs={12} lg={isSecondOptionVisible ? 6 : 12}><BettingOption token={token} isSecond={false} setIsSecondOptionVisible={setIsSecondOptionVisible} isSecondOptionVisible={isSecondOptionVisible} /></Col>
              {isSecondOptionVisible && <Col xs={12} lg={6}><BettingOption token={token} isSecond={true} setIsSecondOptionVisible={setIsSecondOptionVisible} isSecondOptionVisible={isSecondOptionVisible} /></Col>}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
