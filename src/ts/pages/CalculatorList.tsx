import React, { Component } from "react";
import { data } from "../App";
import CalculatorCard from "./CalculatorCard";
import "../../styles/pages/CalculatorList.scss";

// TODO: Implement a search system (later, when cards exceeds 10).
export default class CalculatorList extends Component {
  render() {
    const cards = data["calculators"].map(
      (
        card: {
          name: string;
          description: string;
          unfinished: boolean;
          link: string;
        },
        index: number
      ) => {
        return (
          <CalculatorCard
            name={card.name}
            description={card.description}
            unfinished={card.unfinished}
            link={!card.link ? "/unfinished" : "/calculators" + card.link}
            key={index}
          />
        );
      }
    );

    return (
      <div className="CalculatorList">
        <h1 id="calculator-list">Calculator List</h1>
        <p>
          Here is a list of all planned and made calculators. If you want to
          help contribute, please visit{" "}
          <a href="https://github.com/Cutewarriorlover/hycalc">
            the source code on GitHub
          </a>
        </p>

        <div className="CalculatorList__card-list">{cards}</div>
      </div>
    );
  }
}
