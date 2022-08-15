import { useEffect, useRef, useState } from "react";

const App = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    navigator.
    navigator.clipboard.readText().then((text) => {
      paragraphRef.current.value = text;
    });
  }, []);

  return (
    <div className="App">
      <input ref={paragraphRef}></input>
    </div>
  );
};

export default App;
