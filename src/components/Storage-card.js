import React from "react";
import "./Storage-card.css";
import Dialog from "./dialog";

class StorageCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="storage__container">
          <Dialog />
          <h5>
            You've used <strong>815 GB</strong> of your storage
          </h5>
          <div className="loadingbar-container">
            <div className="loadingbar">
              <div className="circle"></div>
            </div>
          </div>
          <div className="storage">
            <h5>
              <strong>0 GB</strong>
            </h5>
            <h5>
              <strong>1000 GB</strong>
            </h5>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default StorageCard;
