import React from "react";
import { changeValue } from "./changeValue";
const MyButton = (props) => {
  const attributes = {};
  const { id, click, text } = props.child;

  if (props.id) {
    attributes["id"] = id;
  }

  return (
    <div>
      <button
        {...attributes}
        onClick={() => {
          changeValue(click);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default MyButton;
