import React, { Component } from "react";
import dataFeatures from "../Data/arrayFeatures.json";
import dataWheels from "../Data/wheels.json";
import "./ChooseTeslaPractice.css";

export default class ChooseTeslaPractice extends Component {
  state = {
    currentCar: {
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
      currentCar: newCar,
    });
  };

  changeWheel = (newWheel) => {
    let objWheel = this.state.currentCar.wheels.find(
      (item) => item.idWheel === newWheel.idWheel
    );

    if (objWheel !== -1) {
      this.setState({
        currentCar: { ...this.state.currentCar, srcImg: objWheel.srcImg },
      });
    }
  };

  renderIcons = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div
          onClick={() => this.changeCar(item)}
          style={{ cursor: "pointer" }}
          className="row border border-info"
          key={index}
        >
          <div className="col-3 p-2">
            <img style={{ width: "100%" }} src={item.img} alt={item.title} />
          </div>
          <div className="col-9">
            <h5 className="p-2">{item.title}</h5>
            <span className="p-2">{item.type}</span>
          </div>
        </div>
      );
    });
  };

  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div
          onClick={() => this.changeWheel(item)}
          style={{ height: "184px", cursor: "pointer" }}
          className="row border border-success"
          key={index}
        >
          <div className="col-6 p-2 mt-4">
            <img
              style={{ width: "100%", height: "80%" }}
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className="col-6">
            <h5 className="p-2 mt-4">{item.title}</h5>
            <span className="p-2">{item.price}</span>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    let tagScript = document.createElement("script");

    tagScript.src =
      "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.6.0/js-cloudimage-360-view.min.js";

    document.querySelector("#appendScript").appendChild(tagScript);
  };

  componentDidUpdate = () => {
    // Clear old image
    document.querySelector("#currentCar").innerHTML = "";

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
            <div className="model">
              {/* <img
                style={{ width: "100%" }}
                src="./images/images-white/images-white-1/tesla-1.jpg"
                alt="tesla_white"
              /> */}
              <div
                id="currentCar"
                style={{ minWidth: "100%" }}
                className="cloudimage-360"
                data-folder={"./images/" + this.state.currentCar.srcImg}
                data-filename="tesla-{index}.jpg"
                data-amount="8"
              ></div>
            </div>
            <div id="appendScript"></div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="card text-dark">
                  <h5 className="card-header">Exterior Colors</h5>
                  <div className="card-body">
                    <div className="container-fluid">{this.renderIcons()}</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card text-dark">
                  <h5 className="card-header">Wheels</h5>
                  <div className="card-body">
                    <div className="container-fluid">{this.renderWheels()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-12">
          <div className="card text-dark">
            <h5 className="card-header">Feature Details</h5>
            <table className="table">
              <thead>
                <tr class="table-light">
                  <th>Color</th>
                  <th>{this.state.currentCar.title}</th>
                </tr>
                <tr class="table-secondary">
                  <th>Price</th>
                  <th>{this.state.currentCar.price}</th>
                </tr>
                <tr class="table-success">
                  <th>Engine Type</th>
                  <th>{this.state.currentCar.engineType}</th>
                </tr>
                <tr class="table-danger">
                  <th>Range</th>
                  <th>{this.state.currentCar.range}</th>
                </tr>
                <tr class="table-warning">
                  <th>Peak Power</th>
                  <th>{this.state.currentCar.peakPower}</th>
                </tr>
                <tr class="table-info">
                  <th>Acceleration</th>
                  <th>{this.state.currentCar.acceleration}</th>
                </tr>
                <tr class="table-primary">
                  <th>Top Speed</th>
                  <th>{this.state.currentCar.topSpeed}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
