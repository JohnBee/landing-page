import React from 'react';
import './App.css';
import { Repolist } from "./components/repo-list";
import { Scene } from "./components/background.js";
import GHlogo from "./images/GitHub_Logo_White.png";
import {reactList, webglList, aocList, mlList} from "./components/repo-index.js";
function App() {

    return (
    <div className="App">
        <div className='Content'>
            <h1 className="Header1">
                <span className='Hbackground'>
                    John Barraclough
                </span>
            </h1>
            <div className="GitHubLogoDiv">
                <a className="GHLogoLink" href="https://github.com/JohnBee">
                    <img className="GHlogo" src={GHlogo} alt="Link to GitHub"></img>
                </a>
            </div>
            <h2 className="Header2">
                <span className='Hbackground'>
                    React JS
                </span>
            </h2>
            <Repolist items={reactList}/>

            <h2 className="Header2">
                <span className='Hbackground'>
                    WebGL ThreeJS
                </span>
            </h2>
            <Repolist items={webglList} />
            
            <h2 className="Header2">
                <span className='Hbackground'>
                    Machine Learning
                </span>
            </h2>

            <Repolist items={mlList} />
            
            <h2 className="Header2">
                <span className='Hbackground'>
                    Advent of Code
                </span>
            </h2>
            <Repolist items={aocList} />
        </div>
        <Scene />
    </div>
    );
}

export default App;
