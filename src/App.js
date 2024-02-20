import React, { useState, useEffect } from 'react';
import { io, Socket } from "socket.io-client";
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

  useEffect(()=>{
    const token = localStorage.getItem("accessToken");
    if(token){
      setToken(token);
    }
  }, [localStorage.getItem("accessToken")]);
  useEffect(() => {
    try {
      
      if (socket !== undefined) {
        socket.on("disconnect", () => {
          console.log("Disconnected");
          window.location.reload();
        });

        socket.on("auto_bet_rounds", (data) => {
          console.log("auto_bet_rounds", data);
          if (data) {
            let user = localStorage.getItem("user")
            let userJson = JSON.parse(user)
            if (userJson && userJson._id) {
              localStorage.setItem('auto_bet_round', data[userJson._id])
            }
          }
        });

        socket.on("receive_live_betting_table", async (data) => {
          console.log("receive_live_betting_table", data);
          setshowtoast(false);
          setLiveBettingTable(data);
        });

        //if(localStorage.getItem('token')== undefined) {
        //  socket.on("receive_previous_round", (data: any) => {
        //   setRoundIdList(data);
        // });
        //}
        socket.on("receive_previous_round",async (data) => {
          console.log("receive_previous_round", data);
          setRoundIdList(data);
        });

        socket.on("auto_bet_progress", (data) => {
          console.log("auto_bet_progress", data);
          let user = localStorage.getItem("user")
          let userJson = JSON.parse(user)

          if (userJson && data && userJson._id) {
            localStorage.setItem('auto_bet_progress', JSON.stringify(data[userJson._id]))
            localStorage.setItem('payout_multiplier', data[userJson._id]?.payout_multiplier)
            localStorage.setItem('bet_amount', data[userJson._id]?.bet_amount)
          }
        });

        socket.on("online_players", (data) => {
          console.log("online_players", data);
          setonlinePlayers(data);
        });

        socket.on("send_chat", (data) => {
          console.log("send_chat", data);
          setchat(data);
        });

        socket.on("stop_multiplier_count", (data) => {
          console.log("stop_multiplier_count", data);
          let players = data?.players;
          setshowprofittoast(false);
          let game_crash_value = data?.game_crash_value;
          let userJson = localStorage.getItem("user");
          let user = JSON.parse(userJson);
          dispatch(setBustedValue('Busted @ ' + game_crash_value));
          if (players.length > 0) {
            players.forEach((elem) => {
              if (elem.userId === user._id) {
                retrieve_user_detail()
                setshowprofittoast(true);
                toast.error(
                  t("balanceChangesBy") + "-" + elem.betAmount + ". " + t("betAgain")
                );                
              }
            });
          }
        });
      }
    } catch (error) {
      setLogs(error, 'error')
    }
  }, [socket]);
  if (!socket) {
    const newSocket = io(process.env.REACT_APP_BE_BASE_URL);
    newSocket.on("connect", () => {
      console.log("Connected to the server!");
    });
    setsocket(newSocket);
  }

//  if (!socket) {
//    setsocket(io(import.meta.env.VITE_BE_BASE_URL));
//  }

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
