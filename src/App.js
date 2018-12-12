import React, { Component } from 'react';
import Post from './componente/post';
import Paisagem from './componente/paisagem.jpg';
import Paisagem2 from './componente/paisagem2.jpeg';
import Paisagem3 from './componente/paisagem3.jpg';
import './style.css';


class App extends Component {
  render() {
    return (
      <div className="tela">
       <Post title="viny_batistaa" src={Paisagem2} text="bbbbbb"/>
       <Post title="segatoy" src={Paisagem3} text="aaaaa"/>
       <Post title="mrblack" src={Paisagem3} text="cccccccc"/>


      </div>
    );
  }
}

export default App;