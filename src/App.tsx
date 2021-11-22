import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { Main } from "./components/MainPage/Main";

function App() {
  return (
    <>
      {/* <LoadingScreen /> */}
      <Router>
        <Main />
      </Router>
    </>
  );
}

export default App;
