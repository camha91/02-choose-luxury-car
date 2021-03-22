import React, { Component } from "react";
import "./ChooseTeslaSAdvanced.css";
import dataFeatures from "../../Data/arrayFeatures.json";
import dataWheels from "../../Data/wheels.json";

export default class ChooseTeslaSAdvanced extends Component {
  // Create state for changing car
  state = {
    carCurrent: {
      id: 1,
      title: "Pearl White",
      type: "Multi-Coat",
      img: "./images/icons/icons/icon-white.jpg",
      srcImg: "images-white/images-white-1/",
      color: "White",
      price: "112,990",
      engineType: "Tri Motor All-Wheel Drive",
      range: "390 mi",
      peakPower: "1,020 hp",
      acceleration: "1.99 s 0-60 mph",
      topSpeed: "200 mph",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-white/images-white-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-white/images-white-2/",
        },
      ],
    },
  };

  changeCar = (newCar) => {
    return this.setState({
      carCurrent: newCar,
    });
  };

  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div
          onClick={() => this.changeCar(item)}
          className="row border border-color-default mt-2 pt-2 pb-2 m-3"
          key={index}
          style={{ cursor: "pointer" }}
        >
          <div className="col-3">
            <img
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt={item.color}
            />
          </div>
          <div className="col-9">
            <h4 className="p-3">{item.title}</h4>
            <span className="p-3 pt-0 mt-0">{item.type}</span>
          </div>
        </div>
      );
    });
  };

  renderWheel = () => {
    return dataWheels.map((item, index) => {
      return (
        <div className="row border" key={index}>
          <div className="col d-flex flex-row">
            <div className="p-2">
              <img style={{ height: "100%" }} src={item.img} alt={item.title} />
            </div>
            <div className="p-2">
              <h4 className="p-3">{item.title}</h4>
              <span className="p-3 pt-0 mt-0">{item.price}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  // Life Cycles

  componentDidMount = () => {
    // Only run one time after render

    let tagScript = document.createElement("script");
    tagScript.src =
      "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.6.0/js-cloudimage-360-view.min.js";

    document.querySelector("#appendScript").appendChild(tagScript);
  };

  componentDidUpdate = () => {
    // Run after state changed, automatically run after render
    // Note: Do not setState at this component because infinity loop

    // Clear old images
    document.querySelector("#carCurrent").innerHTML = "";

    let tagScript = document.createElement("script");

    tagScript.src =
      " https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";

    // Clear old script before append new script
    document.querySelector("#appendScript").innerHTML = "";

    document.querySelector("#appendScript").appendChild(tagScript);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="model" style={{ width: "100%" }}>
              {/* <img
                style={{ width: "100%" }}
                src="./images/images-white/images-white-1/white-1.png"
                alt="white_tesla"
              /> */}
              <div
                id="carCurrent"
                style={{ minWidth: "100%" }}
                className="cloudimage-360"
                data-folder={"./images/" + this.state.carCurrent.srcImg}
                data-filename="tesla-{index}.jpg"
                data-amount="8"
              ></div>
            </div>
            <div id="appendScript"></div>
            <div className="card mt-2">
              <h5 className="card-header text-default">Exterior Color</h5>
              <table className="table border border-color-light" border="1">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>White</th>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <th>$112,990</th>
                  </tr>
                  <tr>
                    <th>Engine Type</th>
                    <th>Tri Motor All-Wheel Drive</th>
                  </tr>
                  <tr>
                    <th>Range</th>
                    <th>390 mi</th>
                  </tr>
                  <tr>
                    <th>Peak Power</th>
                    <th>1,020 hp</th>
                  </tr>
                  <tr>
                    <th>Acceleration</th>
                    <th>1.99 s 0-60 mph</th>
                  </tr>
                  <tr>
                    <th>Top Speed</th>
                    <th>200 mph</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="col-6">
            <div className="card text-dark">
              <h5 className="card-header text-dark">Exterior Color</h5>
              <div className="card-body">
                <div className="container-fluid">{this.renderIcon()}</div>
              </div>
            </div>
            <div className="card text-dark">
              <h5 className="card-header text-dark">Wheels</h5>
              <div className="card-body">
                <div className="container-fluid">{this.renderWheel()}</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
