import React ,{Component} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Tour from './components/Tour/Tour';
import TourList from './components/TourList';


class App extends Component {
  render(){
    return (
  <main>
    
    <Navbar/>
  <TourList/>
  
  
  </main>
  
  
    
  )};
}

export default App;
