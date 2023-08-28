// State

import { useState } from "react";

function Counter() {
    // const arr = useState(15);
    // const count = arr[0];
    // const setCount = arr[1];

    const [count, setCount] = useState(0);
    const [text, setText] = useState("bla");

    const handleClick = () => {
        const nextCount = count + 1;
        setCount(nextCount);
        setText(text + "bla");
    };

    return (
        <>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <p>{text}</p>
            <button onClick={handleClick}>+1</button>
        </>
    );
}

export default Counter;
