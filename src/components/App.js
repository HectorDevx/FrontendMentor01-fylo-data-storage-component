import React from "react";
import "./App.css";

import LogoCard from "./Logo-card.js";
import StorageCard from "./Storage-card.js";

function App() {
  return (
    <React.Fragment>
      <main className="page">
        <wrapper className="page-container">
          <LogoCard />
          <StorageCard />
        </wrapper>
      </main>
    </React.Fragment>
  );
}

export default App;
