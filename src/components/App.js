import '../styles/App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './Home';
import Service from './Service';
import productName from '../images/productName.png'
import productName1 from '../images/productName1.png'
import Schemes from './Schemes';

function App() {
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const [goals, setGoals] = useState(null);
  const [reply, setReply] = useState(null);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Header mediaWidth={mediaWidth} user={user} setUser={setUser}/> */}
                <Header mediaWidth={mediaWidth} homePage={true} productName={productName}/>
                <Home />
              </>
            }
          />
          <Route path='/form' element={
            <>
              <Header mediaWidth={mediaWidth} homePage={true} productName={productName}/>
              <Service setGoals={setGoals} setReply={setReply}/>
            </>
          }/>
          <Route path='/schemes' element={
            <>
              <Header mediaWidth={mediaWidth} homePage={false} productName={productName1}/>
              <Schemes goals={goals} reply={reply}/>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
