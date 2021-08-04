import React, { Component, ReactElement, RefObject } from "react";
import "../../../styles/pages/Calculator.scss";
import { calcEhp } from "../../calculations/ehp";
import { setInputFilter } from "../../validation";
import EhpCard from "../cards/EhpCard";

export default class EhpCalculator extends Component {
  private healthRef: RefObject<any>;
  private defenseRef: RefObject<any>;
  private submitRef: RefObject<any>;
  private resultRef: RefObject<any>;

  state: {
    results: Array<ReactElement>;
    key: number;
  };

  constructor(props: object) {
    super(props);

    this.healthRef = React.createRef();
    this.defenseRef = React.createRef();
    this.submitRef = React.createRef();
    this.resultRef = React.createRef();

    this.state = {
      results: [],
      key: 0,
    };
  }

  componentDidMount() {
    setInputFilter(this.healthRef.current, (value) => /^\d*$/.test(value));

    this.submitRef.current.addEventListener("click", () => {
      const health = parseInt(this.healthRef.current.value || 0);
      const defense = parseInt(this.defenseRef.current.value || 0);

      const ehp = calcEhp(health, defense);
      const healthWeight = calcEhp(health + 1, defense) - ehp;
      const defenseWeight = calcEhp(health, defense + 1) - ehp;

      this.setState({
        results: [
          <EhpCard
            ehp={ehp}
            healthWeight={healthWeight}
            defenseWeight={defenseWeight}
            key={this.state.key}
          />,
        ].concat(this.state.results),
        key: this.state.key + 1,
      });
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

        <h2>Results History</h2>

        <br />

        <div className="ehp-calculator__results" ref={this.resultRef}>
          {this.state.results}
        </div>
      </div>
    );
  }
}
