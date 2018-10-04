import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      changeDue: "0.00"
    };
    this.updateStateValues = this.updateStateValues.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateStateValues(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  calculate() {
    var amountDue = this.state.amountDue;
    var amountReceived = this.state.amountReceived;
    var changeDue = (amountReceived - amountDue).toFixed(2);

    var makePos = Math.abs(changeDue)

    var twenties = Math.floor(makePos / 20);
    var twentiesRemainder = makePos % 20;

    var tens = Math.floor(twentiesRemainder / 10);
    var tensRemainder = twentiesRemainder % 10;

    var fives = Math.floor(tensRemainder / 5);
    var fivesRemainder = tensRemainder % 5;

    var ones = Math.floor(fivesRemainder / 1);
    var onesRemainder = fivesRemainder % 1;

    var quarters = Math.floor(onesRemainder / 0.25);
    var quartersRemainder = onesRemainder % 0.25;

    var dimes = Math.floor(quartersRemainder / 0.10);
    var dimesRemainder = quartersRemainder % 0.10;

    var nickels = Math.floor(dimesRemainder / 0.05);
    var nickelsRemainder = dimesRemainder % 0.05;

    var pennies = Math.round(nickelsRemainder / 0.01);

    console.log(changeDue);
    console.log(pennies);

    this.setState({
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
      changeDue: changeDue
    })

  }

  render() {
    return (
      <Money className="container">
        <div>
          <h1 className="text-white">Change Calculator</h1>
          <p className="text-white">Change is inevitable in life! So let me count them for you!</p>
        </div>
        <hr className="bg-light"></hr>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Enter Information</div>
              <div className="card-body">
                <p className="card-text">How much is due?
                <input name="amountDue" value={this.state.amountDue} onChange={this.updateStateValues} type="text" className="col-sm-12 form-control" /></p>
                <p className="card-text">How much was received?
                <input name="amountReceived" className="col-sm-12 form-control" type="text" value={this.state.amountReceived} onChange={this.updateStateValues} /></p>
              </div>
              <div className="card-footer">
                <button className="btn-primary btn-block active" onClick={this.calculate}>Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body" onChange={this.updateStateValues}>
                <div className="card-block" className={`alert-${this.state.changeDue > 0 ? 'success' : 'danger'}`}>
                  <div name="changeDue" className="alert text-center">The total change due is ${this.state.changeDue}</div>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <div className="card  bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Twenties</p>
                      <p name="twenties">{this.state.twenties}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card  bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Tens</p>
                      <p name="tens">{this.state.tens}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Fives</p>
                      <p name="fives">{this.state.fives}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Ones</p>
                      <p name="ones">{this.state.ones}</p>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <div className="card bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Quarters</p>
                      <p name="quarters">{this.state.quarters}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Dimes</p>
                      <p name="dimes">{this.state.dimes}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Nickels</p>
                      <p name="nickels">{this.state.nickels}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-light card-outline-secondary p-3 mb-3">
                      <p className="font-weight-bold">Pennies</p>
                      <p name="pennies">{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Money >
    )
  };
}

const Money = styled.div`
padding: 40px;
p {
  font-size: 20px;
}
`
export default App;
