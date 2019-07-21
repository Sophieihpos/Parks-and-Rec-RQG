import React from 'react'

function QuoteBox(props){
  return(
    <div className="App" id="quote-box">
      <h1 id="text" name="quote" value={props.data.quote}>"{props.data.quote}"</h1>
      <p id="author" name="author" value={props.data.author}>- {props.data.author}</p>
      <div id="buttons">
        <a
          class="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text="${props.data.quote}" - ${props.data.author}`}
          id="tweet-quote"
          target="_blank"
          style={{color: props.data.colour}}>
            <i class="fab fa-twitter-square"></i>
        </a>
        <button id="new-quote" onClick={props.handleClick} style={{backgroundColor: props.data.colour}}>New Quote</button>
      </div>
    </div>
  )
}

export default QuoteBox
