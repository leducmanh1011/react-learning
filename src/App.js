import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './components/JokesData';
import todosData from './components/todosData';
import Form from './components/FormContainer';
import MemeGenerator from './components/MemeGenerator';



class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
