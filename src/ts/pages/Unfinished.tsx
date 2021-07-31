import React, { Component } from "react";
import "../../styles/pages/Unfinished.scss";

export default class Unfinished extends Component {
  render() {
    return (
      <div className="Unfinished">
        <h1>Uh-Oh!</h1>

        <p>
          Unfortunately, it seems that the creator of HyCalc (Cutewarriorlover)
          hasn't finished this calculator yet. Try again later! (Or, well, annoy
          him until he agrees to do it. His Discord account is{" "}
          <code>Cutewarriorlover#6792</code>.)
        </p>

        <div className="Unfinished__back-button--wrapper">
          <button
            className="button"
            role="button"
            onClick={() => history.back()}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i className="fas fa-arrow-left"></i> BACK
          </button>
        </div>
      </div>
    );
  }
}
