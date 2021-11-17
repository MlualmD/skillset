import React from "react";
import { lazy, Suspense } from "react";

const ComponentInChild = (props) => {
  const { child } = props;
  const ComponentName = lazy(() => import(`./${child.base_component}`));
  console.log("child : ",child);
  return (
    <Suspense fallback={<div>...loading</div>}>
      <ComponentName />
    </Suspense>
  );
};

export default ComponentInChild;
