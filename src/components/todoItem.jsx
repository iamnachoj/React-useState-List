import React, { useState } from "react";

export default function TodoItem(props) {
  const [done, setDone] = useState(false);

  return (
    <li
      style={
        done
          ? { textDecorationLine: "line-through" }
          : { textDecorationLine: "none" }
      }
      onClick={() => {
        let iterate = done ? false : true;
        setDone(iterate);
      }}
    >
      {props.item}
    </li>
  );
}
