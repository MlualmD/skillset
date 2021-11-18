import React from "react";
import { lazy, Suspense } from "react";

const ComponentInChild = (props) => {
  const { child } = props;
  const ComponentName = lazy(() => import(`./${child.base_component}`));

  return (
    <Suspense fallback={<div>...loading</div>}>
      <ComponentName child={child} />
    </Suspense>
  );
};

export default ComponentInChild;
