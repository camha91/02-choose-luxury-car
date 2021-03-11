import React, { Component } from "react";
import whiteTesla from "../assets/products/white-tesla-S.png";
import blackTesla from "../assets/products/black-tesla-S.png";
import steelTesla from "../assets/products/steel-tesla-S.png";
import blueTesla from "../assets/products/blue-tesla-S.png";
import redTesla from "../assets/products/red-tesla-S.png";
import whiteIcon from "../assets/icons/icon-white.jpg";
import blackIcon from "../assets/icons/icon-black.jpg";
import steelIcon from "../assets/icons/icon-steel.jpg";
import blueIcon from "../assets/icons/icon-blue.jpg";
import redIcon from "../assets/icons/icon-red.jpg";

export default class ChooseTeslaS extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img style={{ width: "100%" }} src={whiteTesla} alt="white_tesla" />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-dark">Paint</div>
              <div className="card-body">
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img className="col-3" src={whiteIcon} alt="silver_icon" />
                  <div className="col-9">
                    <h3>Pearl White</h3>
                    <p>Multi-Coat</p>
                  </div>
                </div>
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img className="col-3" src={blackIcon} alt="black_icon" />
                  <div className="col-9">
                    <h3>Black</h3>
                    <p>Solid</p>
                  </div>
                </div>
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img className="col-3" src={steelIcon} alt="steel_icon" />
                  <div className="col-9">
                    <h3>Midnight Silver</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img className="col-3" src={blueIcon} alt="blue_icon" />
                  <div className="col-9">
                    <h3>Deep Blue</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img className="col-3" src={redIcon} alt="red_icon" />
                  <div className="col-9">
                    <h3>Red</h3>
                    <p>Multi-Coat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
