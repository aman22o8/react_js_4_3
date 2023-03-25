// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countmango: 0, countbanana: 0}

  Onmango = () => {
    this.setState(prevState => ({countmango: prevState.countmango + 1}))
  }

  Onbanana = () => {
    this.setState(prevState => ({countbanana: prevState.countbanana + 1}))
  }

  render() {
    const {countmango, countbanana} = this.state
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="main_heading">
            Bob ate <span className="highlighted">{countmango} </span>
            mangoes
            <span className="highlighted"> {countbanana}</span> bananas
          </h1>
          <div className="differentiating">
            <div className="fruit_card_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="fruits"
                alt="mango"
              />
              <button onClick={this.Onmango} className="button" type="button">
                Eat Mango
              </button>
            </div>
            <div className="fruit_card_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruits"
                alt="banana"
              />
              <button onClick={this.Onbanana} className="button" type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
