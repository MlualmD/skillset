import React from "react";
import ComponentInChild from "./ComponentInChild";

const Page = (props) => {
  const { children } = props;

  return (
    <div>
      {children.map((child, index) => (
        <ComponentInChild key={index} child={child} />
      ))}
    </div>
  );
};

export default Page;
