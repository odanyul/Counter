// State

import { useState } from "react";

function Counter() {
    // const arr = useState(15);
    // const count = arr[0];
    // const setCount = arr[1];

    const [count, setCount] = useState(0);
    const [text, setText] = useState("bla");
    const [textVisible, setTextVisible] = useState(true);

    const handleClick = () => {
        const nextCount = count + 1;
        setCount(nextCount);
        setText(text + "bla");
    };

    const toggleTextVisibility = () => {
        if (textVisible) {
            setTextVisible(false);
        } else {
            setTextVisible(true);
        }
    };

    return (
        <>
            <h1>Counter</h1>
            <h3>{count}</h3>
            {/* <p
                style={{
                    display: textVisible ? "block" : "none",
                }}
            >
                {text}
            </p> */}
            {textVisible && <p>{text}</p>}
            <button onClick={handleClick}>+1</button>
            <button onClick={toggleTextVisibility}>
                {textVisible ? "Hide text" : "Show text"}
            </button>
        </>
    );
}

export default Counter;
