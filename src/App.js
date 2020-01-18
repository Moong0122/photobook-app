import React from "react";

function Choco({ name, sweet }) {
  return (
    <div>
      {name} {sweet} hello~~~
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>hihi</h1>
      <Choco name="kakao" sweet="very sweet" />
    </div>
  );
}

export default App;
