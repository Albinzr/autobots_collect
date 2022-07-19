import React from 'react';
import './App.css';
import Home from './pages/Home/Home';

window.scrollElToView = id => {
  const el = document.getElementById(id);
  if(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

window.contactUs =()=> {
  window.location.href= "mailto:support@applytics.in?subject=Query&body="
}

window.openApp =()=> {
  window.open('https://app.applytics.in', '_blank');
}

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
