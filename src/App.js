import React from 'react';
import './App.css';
import Navigation from './components/AppBar/Navigation';
import Card from './components/Main/Card'

function App() {
  const navbar = {
    title: "Simple Solutions",
    home: "Home",
    items: "Items",
    contact: "Contact",
  }
  const cardContent = {
    img: "productImage",
    title: "productTitle",
    description: "productDescription",
  }
  return (
    <div className="App">
      <Navigation 
      title={navbar.title} 
      home={navbar.home}
      items={navbar.items}
      contact={navbar.contact}/>
      <Card 
      img={cardContent.img}
      title={cardContent.title}
      description={cardContent.description}/>
    </div>
  );
}

export default App;
