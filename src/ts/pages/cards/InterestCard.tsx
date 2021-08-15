import React, { Component } from "react";
import "../../../styles/ResultCard.scss";

interface IInterestCardProps {
  finalCoins: number;
  earnedCoins: number;
}

interface IInterestCardState {}

export default class InterestCard extends Component<
  IInterestCardProps,
  IInterestCardState
> {
  public color =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

  render() {
    return (
      <div
        className="result-card result-card--ehp"
        style={{ backgroundColor: this.color }}
      >
        <p>Final Coins: ${this.props.finalCoins.toFixed(2)}</p>
        <p>Coins Earned: ${this.props.earnedCoins.toFixed(2)}</p>
      </div>
    );
  }
}
