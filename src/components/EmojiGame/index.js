/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameEnd: false,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onCLickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isPresent = clickedEmojisList.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojisList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojisList: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  renderWinOrLoseCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = emojisList.length === clickedEmojisList.length
    return (
      <WinOrLoseCard
        onClickPlayAgain={this.restartGame}
        score={clickedEmojisList.length}
        isWon={isWon}
      />
    )
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emojis-el-list">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            onCLickEmoji={this.onCLickEmoji}
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameEnd, topScore, clickedEmojisList} = this.state
    console.log(isGameEnd)
    const score = clickedEmojisList.length
    return (
      <div className="app-container">
        <NavBar score={score} isGameEnd={isGameEnd} topScore={topScore} />
        <div className="b-container-for-ref">
          {isGameEnd ? this.renderWinOrLoseCard() : this.renderEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
