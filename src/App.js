import './App.css';
import { Repolist } from "./components/repo-list";
import { Scene } from "./components/background.js";
import GHlogo from "./images/GitHub_Logo_White.png";
import {reactList, webglList, aocList, mlList} from "./components/repo-index.js";
function App() {

    return (
    <div className="App">
        
        <h1 className="Header1">
        John Barraclough
        </h1>
        <div className="GitHubLogoDiv">
            <a className="GHLogoLink" href="https://github.com/JohnBee">
                <img className="GHlogo" src={GHlogo} alt="Link to GitHub"></img>
            </a>
        </div>
        <h2 className="Header2">
            React JS
        </h2>
        <Repolist items={reactList}/>

        <h2 className="Header2">
            WebGL ThreeJS
        </h2>
        <Repolist items={webglList} />

        <h2 className="Header2">
            Machine Learning
        </h2>
        <Repolist items={mlList} />

        <h2 className="Header2">
            Advent of Code
        </h2>
        <Repolist items={aocList} />
        <Scene />
    </div>
    );
}

export default App;
