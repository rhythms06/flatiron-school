import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Registry />
    </div>
  );
}

export default App;
