import './App.css';
import { Repolist } from "./components/repo-list";
import { Scene } from "./components/background.js";
import GHlogo from "./images/GitHub_Logo_White.png";

function App() {
    let reactList = [
        {
            name: "Word Blitz",
            link: "https://johnbee.github.io/word-blitz/",
            repo: "https://github.com/JohnBee/word-blitz"
        },
        {
            name: "React Snake",
            link: "https://johnbee.github.io/ReactSnake/",
            repo: "https://github.com/JohnBee/ReactSnake"
        }
    ]
    let webglList = [
        {
            name: "Sierpinksi 3D",
            link: "https://johnbee.github.io/3d-sierpinski/",
            repo: "https://github.com/JohnBee/3d-sierpinski",
        },
    ]

    return (
    <div className="App">
        {/* <Scene /> */}
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
    </div>
    );
}

export default App;
