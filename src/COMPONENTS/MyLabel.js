import React from "react";

const MyLabel = (props) => {
  const attributes = {};
  const { id } = props.child;
  if (id) {
    attributes["id"] = id;
  }

  return (
    <div>
      <label {...attributes}></label>
    </div>
  );
};

export default MyLabel;
