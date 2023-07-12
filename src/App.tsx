import { clsx } from "clsx";
import { useState } from "react";
import classes from "./App.module.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.App}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className={clsx(classes.logo, classes.react)}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={classes.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={classes["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
