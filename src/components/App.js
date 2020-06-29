import React from "react";
import "./App.css";

import LogoCard from "./Logo-card.js";
import StorageCard from "./Storage-card.js";

function App() {
  return (
    <React.Fragment>
      <main className="page">
        <section className="page-container">
          <LogoCard />
          <StorageCard />
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
