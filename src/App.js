import React, { Component } from 'react';
import axios from 'axios';
const APP_KEY='c972d10ce80b4bc2fa9929eb5a810cbf'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      temp: "",
      des: "",
      show: false,
      icon:""

    }
  }
  save = e => {
    this.setState({ name: e.target.value });
  }
  sub = async(e) => {
    e.preventDefault();
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&appid=${APP_KEY}`)



      .then(response => {
        if (response.data.weather[0].id >= 200 && response.data.weather[0].id <= 232) {
          this.setState({ icon: "fas fa-poo-storm" })
        }
        if (response.data.weather[0].id >= 300 && response.data.weather[0].id <= 321) {
          this.setState({ icon: "fas fa-cloud-moon-rain" })
        }
        if (response.data.weather[0].id >= 500 && response.data.weather[0].id <= 531) {
          this.setState({ icon: "fas fa-poo-storm" })
        }
        if (response.data.weather[0].id >= 600 && response.data.weather[0].id <= 622) {
          this.setState({ icon: "fas fa-temperature-low" })
        }
        if (response.data.weather[0].id >= 701 && response.data.weather[0].id <= 781) {
          this.setState({ icon: "fas fa-cloud-meatball" })
        }
        if (response.data.weather[0].id ===800) {
          this.setState({ icon: "fas fa-sun" })
        }
        if (response.data.weather[0].id >= 801 && response.data.weather[0].id <= 804) {
          this.setState({ icon: "fas fa-smog" })
        }
        

        this.setState({ temp: response.data.main.temp, des: response.data.weather[0].description, show: true })

      }
      )
      .catch()

  }
  render() {
    if (this.state.show) {
      return (
        <div className="container bg-info">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Check Your Weather</h1>
              <br></br>
              <hr></hr>
              <form onSubmit={this.sub}>
                <div className="text-center ">
                  <input className="form-control form-control-sm" name="name" onChange={this.save}  type="text" placeholder="Enter Your City"></input>
                  <br></br>
                  <button type="submit" className="btn btn-secondary d-inline">Check</button>
                  <br></br>
                  <br></br>
                </div>
              </form>



              <div className="card">
                <div className="card-body text-center">
                  <i className={this.state.icon} style={{ fontSize: "98px", color: "red" }}></i>
                  <p>{this.state.des}</p>
                  <br></br>
                  <br></br>
                  <h1 className="text-center">Today's temperetur of {this.state.name} is {`${Math.floor(this.state.temp - 273.15)}`}&deg;</h1>
                </div>
              </div>
              <div style={{ height: "90px", backgroundColor: "green" ,marginTop:"40px"}}>
              <h3 className="text-center">If you want to learn then subscribe my channel</h3>
              </div>

            </div>
          </div>
        </div>

      );

    }
    else {
      return (
        <div className="container bg-info">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Check Your Weather</h1>
              <br></br>
              <hr></hr>
              <form onSubmit={this.sub}>
                <div className="text-center">
                  <input className="form-control form-control-sm" name="name" onChange={this.save}  type="text" placeholder="Enter Your City"></input>
                  <br></br>
                  <button type="submit" className="btn btn-secondary d-inline">Check</button>
                  <br></br>
                  <br></br>
                </div>
              </form>



              <div className="card">
                <div className="card-body text-center " style={{ height: "350px",  }} >
                  <h1>Enter city then you will see your result</h1>
                </div>
              </div>
              <div style={{ height: "90px", backgroundColor: "green" }}>
               

              </div>

            </div>
          </div>
        </div>

      );


    }


  }

}

export default App;
