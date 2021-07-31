import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <div className="Index">
        <h1>Welcome to HyCalc!</h1>

        <p>
          HyCalc is a place where you can calculate everything related to
          Hypixel Skyblock easily. Want to see exactly what your chances of
          getting that item you wanted was? It&#39;s easily done on here!
        </p>

        <br />

        <p>
          If you want, you can browse the calculator list (located{" "}
          <a href="/calc-list">here</a>).
        </p>

        <br />

        <p>
          Want to help make this website better? The source code is{" "}
          <a href="https://github.com/Cutewarriorlover/hycalc">on GitHub</a>
        </p>
      </div>
    );
  }
}
