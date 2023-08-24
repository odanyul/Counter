// JSX - JavaScript XML

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import CatImage, { CUTEST_CAT as CAT } from './Image.jsx';
// import Image, { CUTEST_CAT, CUTEST_DOG } from "./Image.jsx";
import Header, { num } from "./Header.jsx";
import Cat from "./Cat.jsx";

function App() {
    const [count, setCount] = useState(0);

    console.log(num);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <Header />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {/* <Image />
            {CUTEST_CAT}
            {CUTEST_DOG} */}
            <Cat />
        </>
    );
}

export default App;
