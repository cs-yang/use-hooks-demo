import React, { useState } from 'react';
import Router from "./routes";
import logo from './logo.svg';
import './App.css';

function App() {
  const [path, setPath] = useState('/');
  const [menuVisible, setMenuVisible] = useState(true);
  const handleNavigation = (route) => {
    setPath(route);
    setMenuVisible(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          menuVisible ?
              <ul className="Menu">
                <li onClick={() => handleNavigation('/demo1')}>useRef不会造成重新渲染</li>
                <li onClick={() => handleNavigation('/demo2')}>使useRef的最新值用于可渲染必须有state改变</li>
                <li onClick={() => handleNavigation('/demo3')}>useRef的值如果用于useEffect，拿到的是旧值</li>
                <li onClick={() => handleNavigation('/demo5')}>如果使ref的值保持和state值一致需要借助state改变</li>
                <li onClick={() => handleNavigation('/demo6')}>使ref的值保持和state值一致,减少渲染方式</li>
                <li onClick={() => handleNavigation('/demo7')}>useCallback和不使用useCallback的区别</li>
              </ul>
              : <a onClick={() => setMenuVisible(true)} style={{ cursor: 'pointer'}}>展开</a>
        }
        <Router path={path}/>
        {
          menuVisible &&    <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        }
      </header>
    </div>
  );
}

export default App;
