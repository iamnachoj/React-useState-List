import React, { useState } from "react";

export default function TodoItem(props) {
  // const [done, setDone] = useState(false);

  return (
    <li
      // style={{ textDecorationLine: done ? "line-through" : "none" }}
      onClick={() => {
        props.delete(props.id);
        // setDone(!done);
      }}
    >
      {props.item}
      <span>✗</span>
    </li>
  );
}
