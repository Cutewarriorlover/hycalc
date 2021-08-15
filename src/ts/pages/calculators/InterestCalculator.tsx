import React, { Component, ReactElement, RefObject } from "react";
import "../../../styles/pages/Calculator.scss";
import Select from "react-select";
import Cleave from "cleave.js/react";
import { selectStyles } from "../../styles";
import { BankLevel, calcInterest } from "../../calculations/interest";
import InterestCard from "../cards/InterestCard";

const bankLevels = {
  starter: BankLevel.STARTER,
  gold: BankLevel.GOLD,
  deluxe: BankLevel.DELUXE,
  super_deluxe: BankLevel.SUPER_DELUXE,
  premier: BankLevel.PREMIER,
};

export default class InterestCalculator extends Component {
  private startCoinsRef: any;
  private afkHoursRef: any;
  private bankLevelRef: RefObject<any>;
  private submitRef: RefObject<any>;
  private resultRef: RefObject<any>;

  state: {
    results: Array<ReactElement>;
    key: number;
  };

  constructor(props: object) {
    super(props);

    this.startCoinsRef = React.createRef();
    this.afkHoursRef = React.createRef();
    this.bankLevelRef = React.createRef();

    this.submitRef = React.createRef();
    this.resultRef = React.createRef();

    this.state = {
      results: [],
      key: 0,
    };
  }

  componentDidMount() {
    this.submitRef.current.addEventListener("click", () => {
      const bankLevel =
        bankLevels[
          this.bankLevelRef.current?.state?.value?.value as bankLevel
        ] ?? BankLevel.STARTER;

      const startingCoins = parseInt(this.startCoinsRef.value.replace(",", ""));
      const afkHours = parseInt(this.afkHoursRef.value.replace(",", ""));

      const result = calcInterest(startingCoins, afkHours, bankLevel);

      this.setState({
        results: [
          <InterestCard
            finalCoins={result.finalCoins}
            earnedCoins={result.earnedCoins}
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
        <h1>Interest Calculator</h1>

        <a href="/calc-list">
          <i className="fas fa-angle-left"></i> Back to Calculator List
        </a>

        <p>
          <br />
          In Hypixel Skyblock, every season, otherwise known as 31 earth hours,
          you receive <b>Interest</b>. <b>Interest</b> is a small increase of
          coins, which is added based on the amount of original coins in your
          Bank.
        </p>

        <div className="calculator__form">
          <div className="input-container">
            <Cleave
              options={{
                numeral: true,
                numeralThousandsGroupStyle: "thousand",
              }}
              name="health"
              placeholder=" "
              htmlRef={(ref) => (this.startCoinsRef = ref)}
            />
            <div className="cut" />
            <label htmlFor="health" className="placeholder">
              Current Coins
            </label>
          </div>

          <div className="input-container">
            <Cleave
              options={{
                numeral: true,
                numeralThousandsGroupStyle: "thousand",
              }}
              name="defense"
              placeholder=" "
              htmlRef={(ref) => (this.afkHoursRef = ref)}
            />
            <div className="cut" />
            <label htmlFor="defense" className="placeholder">
              AFK Hours
            </label>
          </div>

          <Select
            styles={selectStyles}
            ref={this.bankLevelRef}
            options={[
              { value: "starter", label: "Starter" },
              { value: "gold", label: "Gold" },
              { value: "deluxe", label: "Deluxe" },
              { value: "super_deluxe", label: "Super Deluxe" },
              { value: "premier", label: "Premier" },
            ]}
          />
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
