import * as React from "react"
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="about" element = {<About/>}/>
        <Route path="/privacy" element = {<Privacy/>}/>
      </Routes>
    </div>
  );
}
function Home(){
  return(
    <>
    <nav>
      <ul className='my-list'>
        <li>Home</li>
        <li><Link to = "/about">About</Link></li>
        <li><Link to = "/privacy">Privacy</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Welcome to home page</h2>
      <p>You will get more information later</p>
    </main>
    </>
  )
}
function About(){
  return(
    <>
    <nav>
      <ul className='my-list'>
        <li><Link to = "/home">Home</Link></li>
        <li>About</li>
        <li><Link to = "/privacy">Privacy</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Welcome to about page</h2>
      <p>I am the king of kings you know</p>
      <p>North london Forever, what ever the weather, 
        the streets are our own</p>
    </main>
    </>
  )
}
function Privacy(){
  return(
    <>
    <nav>
      <ul className='my-list'>
        <li><Link to = "/home">Home</Link></li>
        <li><Link to = "/about">About</Link></li>
        <li>Privacy</li>
      </ul>
    </nav>
    <main>
      <h2>Welcome to privacy page</h2>
      <p>Yoy will get more information later</p>
    </main>
    </>
  )
}

export default App;
