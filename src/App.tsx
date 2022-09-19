import React , { Fragment }from 'react';
import './App.css';
import Main from "./components/Main"
import Portflio from './components/Protfolio';
import {AppWrapper} from "./styles/styles"

function App() {
  return (
    <AppWrapper>
      <Main/>
      <Portflio/>
    </AppWrapper>

  )
}

export default App;
