// State

import { useState } from "react";
import Video from "./video";

function Counter() {
  // const arr = useState(15);
  // const count = arr[0];
  // const setCount = arr[1];

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [textVisible, setTextVisible] = useState(true);
  let [color, setColor] = useState("black");
  const [videoWidth, setvideoWidth] = useState(0)

  let arr = [`Never`, ` gonna`, ` give`, ` you`, ` up.`, ` Never`, ` gonna`, ` let`, ` you`, ` down.`, ` Never`, ` gonna`, ` run`, ` around`, ` and`, ` desert`, ` you.`];

  
  const handleClick = (event) => {
    if (event.target.textContent == "-1") {
      const nextCount = count - 1;
      if (nextCount < arr.length) {
        setvideoWidth(0)
      }
      setCount(nextCount);
      let newText = text.split(" ");
      newText.splice(nextCount, 1);
      setText(newText.join(" "));
    } else {
      const nextCount = count + 1;
      setCount(nextCount);
      if (nextCount > 0 && nextCount <= arr.length) {
        setText(text +  arr[nextCount - 1]);
      }
      if (nextCount > arr.length) {
        setvideoWidth(800)
      }
    }
  };

  const toggleTextVisibility = () => {
    if (textVisible) {
      setTextVisible(false);
    } else {
      setTextVisible(true);
    }
  };


  const colorChange = () => {
    if (color == "black") {
      setColor("red");
    } else if (color == "red") {
      setColor("blue");
    } else if (color == "blue") {
      setColor("black");
    }
  };



  return (
    <>
      <h1 style={{ color: color }} onClick={colorChange}>
        Counter
      </h1>
      <h3>{count}</h3>
      {/* <p
                style={{
                    display: textVisible ? "block" : "none",
                }}
            >
                {text}
            </p> */}
      {textVisible && <p>{text}</p>}
      <button onClick={handleClick}>-1</button>
      <button onClick={handleClick}>+1</button>
      <button onClick={toggleTextVisibility}>
        {textVisible ? "Hide text" : "Show text"}
      </button>
      <Video videoID='dQw4w9WgXcQ?si=k-8zZlbHjrRKnP59' width={videoWidth}/>
    </>
  );
}

export default Counter;
