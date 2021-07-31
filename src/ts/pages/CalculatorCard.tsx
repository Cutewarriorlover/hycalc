import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/pages/CalculatorCard.scss";

interface ICalculatorCardProps {
  name: string;
  description: string;
  unfinished: boolean;
  link: string;
}

interface ICalculatorCardState {}

export default class CalculatorCard extends Component<
  ICalculatorCardProps,
  ICalculatorCardState
> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="CalculatorCard--wrapper">
        <div className="CalculatorCard">
          <div className="CalculatorCard__content">
            <h2 className="CalculatorCard__name">{this.props.name}</h2>
            <p className="CalculatorCard__description">
              {this.props.description}
            </p>
            <a href={this.props.link} className="CalculatorCard__visit">{this.props.unfinished ? "In Progress" : "Visit"}</a>
          </div>
        </div>
      </div>
    );
  }
}
