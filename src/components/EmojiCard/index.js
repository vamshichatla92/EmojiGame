import {Component} from 'react'

import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojiDetails, onCLickEmoji} = this.props
    const {emojiUrl, id, emojiName} = emojiDetails
    const onCLickEmojiItem = () => {
      onCLickEmoji(id)
    }
    return (
      <li className="emojis-list emoji-container">
        <button type="button" className="button" onClick={onCLickEmojiItem}>
          <img src={emojiUrl} alt={emojiName} className="emoji-img" />
        </button>
      </li>
    )
  }
}

export default EmojiCard
