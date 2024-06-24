import {Component} from 'react'

import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, isWon, onClickPlayAgain} = this.props
    const winOrLoseImage = isWon
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    const winOrLoseImageaAltText = isWon ? 'happyFace' : 'sadFace'
    const winOrLoseText = isWon ? 'You Won' : 'You Lose'
    const winOrLoseScore = isWon ? 'Best Score' : 'Score'
    return (
      <div className="you-winOr-Loss-cont">
        <div className="a-part">
          <h1 className="you-heading">{winOrLoseText}</h1>
          <p className="best-text">{winOrLoseScore}</p>
          <p className="score-num">{score}/12</p>
        </div>
        <div className="b-part">
          <img src={winOrLoseImage} alt={winOrLoseImageaAltText} />
        </div>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    )
  }
}

export default WinOrLoseCard
