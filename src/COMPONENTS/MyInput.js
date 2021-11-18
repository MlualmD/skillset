import React from "react";

const MyInput = (props) => {
  const { attributes, id } = props.child;
  if (id) {
    attributes["id"] = id;
  }

  return (
    <div>
      <input {...attributes} />
    </div>
  );
};

export default MyInput;
