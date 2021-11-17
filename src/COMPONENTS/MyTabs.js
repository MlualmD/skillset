import React, { useState } from "react";
import MyTab from "./MyTab";
import Page from "./Page";

const MyTabs = (props) => {
  const { children,title } = props;
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);
  return (
    <div>
      <div>{title}</div>
      <div style={{display:"flex",justifyContent:"center"}}>
       
        {children &&
          Array.isArray(children) &&
          children.map((child, i) => (
            /// render the child
            <MyTab onClick={() => setActiveTab(i)} title={child?.title}>
              {child.components}
            </MyTab>
          ))}
      </div>
      <Page activeTab={activeTab}>{children[activeTab].components}</Page>

    </div>
  );
};

export default MyTabs;
