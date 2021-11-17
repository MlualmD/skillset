import logo from "./logo.svg";
import "./App.css";
import dataFromJsonFile from "./jsonFile";
import { lazy, Suspense } from "react";

function App() {
  console.log("dataFromJsonFile : ", dataFromJsonFile);

  const BaseComponent = lazy(() =>
    import(`./COMPONENTS/${dataFromJsonFile.simulation.base_component}`)
  );

  return (
    <div className="App">
      <Suspense fallback={<div>...loading</div>}>
        <BaseComponent title={dataFromJsonFile.simulation.base_component}>{dataFromJsonFile.simulation.children}</BaseComponent>
      </Suspense>
    </div>
  );
}

export default App;
