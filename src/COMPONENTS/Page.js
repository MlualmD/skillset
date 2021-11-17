import React from "react";
import { lazy, Suspense } from "react";
import ComponentInChild from "./ComponentInChild";

const Page = (props) => {
  const { children, activeTab } = props;

  const MyInput = lazy(() => import(`./MyInput`));

  const MyButton = lazy(() => import(`./MyButton`));

  const MyLabel = lazy(() => import(`./MyLabel`));

  return (
    <div>
      {children.map((child) => (
        <ComponentInChild child={child}/>
      ))}
    </div>
  );
};

export default Page;
