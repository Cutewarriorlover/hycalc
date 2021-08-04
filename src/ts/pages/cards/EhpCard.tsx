import React, { Component } from "react";
import "../../../styles/ResultCard.scss"

interface IEhpCardProps {
  ehp: number;
  healthWeight: number;
  defenseWeight: number;
}

interface IEhpCardState {}

export default class EhpCard extends Component<IEhpCardProps, IEhpCardState> {
  public color =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

  render() {
    return (
      <div className="result-card result-card--ehp" style={{backgroundColor: this.color}}>
        <p>Effective Health: {this.props.ehp.toFixed(2)}</p>
        <p>
          Health Weight
          <div className="item-hints">
            <div className="hint" data-position="4">
              <span className="hint-radius"></span>
              <span className="hint-dot"></span>
              <div className="hint-content do--split-children">
                <p>
                  Your Health Weight is the amount of Effective Health you will
                  gain after increasing your Health by one.
                </p>
              </div>
            </div>
          </div>
          : {this.props.healthWeight.toFixed(2)}
        </p>
        <p>
          Defense Weight
          <div className="item-hints">
            <div className="hint" data-position="4">
              <span className="hint-radius"></span>
              <span className="hint-dot"></span>
              <div className="hint-content do--split-children">
                <p>
                  Your Defense Weight is the amount of Effective Health you will
                  gain after increasing your Defense by one.
                </p>
              </div>
            </div>
          </div>
          : {this.props.defenseWeight.toFixed(2)}
        </p>
      </div>
    );
  }
}
