import React, { Component, RefObject } from "react";
import "../../../styles/pages/Calculator.scss";
import { calcEhp } from "../../calculations/ehp";
import { setInputFilter } from "../../validation";

export default class EhpCalculator extends Component {
  private healthRef: RefObject<any>;
  private defenseRef: RefObject<any>;
  private submitRef: RefObject<any>;
  private resultRef: RefObject<any>;

  constructor(props: object) {
    super(props);

    this.healthRef = React.createRef();
    this.defenseRef = React.createRef();
    this.submitRef = React.createRef();
    this.resultRef = React.createRef();
  }

  componentDidMount() {
    setInputFilter(this.healthRef.current, (value) => /^\d*$/.test(value));

    this.submitRef.current.addEventListener("click", () => {
      const health = parseInt(this.healthRef.current.value || 0);
      const defense = parseInt(this.defenseRef.current.value || 0);

      const ehp = calcEhp(health, defense);

      const result = `Effective Health: ${ehp}`;

      this.resultRef.current.textContent = result;
    });
  }

  render() {
    return (
      <div className="EhpCalculator">
        <h1>EHP Calculator</h1>

        <a href="/calc-list">
          <i className="fas fa-angle-left"></i> Back to Calculator List
        </a>

        <p>
          <br />
          <b>EHP</b>, also known as <b>Effective Health</b>, is the amount of
          damage you may receive before dying.
        </p>

        <div className="calculator__form">
          <div className="input-container">
            <input
              name="health"
              type="numeric"
              placeholder=" "
              ref={this.healthRef}
            />
            <div className="cut" />
            <label htmlFor="health" className="placeholder">
              Health
            </label>
          </div>

          <div className="input-container">
            <input
              name="defense"
              type="numeric"
              placeholder=" "
              ref={this.defenseRef}
            />
            <div className="cut" />
            <label htmlFor="defense" className="placeholder">
              Defense
            </label>
          </div>

          <button className="submit" ref={this.submitRef}>
            Calculate!
          </button>
        </div>

        <h2>Result</h2>

        <br />

        <p ref={this.resultRef}>Effective Health: 0</p>
      </div>
    );
  }
}
