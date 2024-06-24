import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {score, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="scores-container">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
        {this.renderScores()}
      </div>
    )
  }
}

export default NavBar
