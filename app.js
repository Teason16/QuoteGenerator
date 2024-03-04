import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const quoteData = [
  {text:'"Too many of us are not living our dreams because we are living our fears"', author:'-Les Brown'
  },
  {text:'"Anyone who has never made a mistake has never tried anything new."', author:'-Albert Einstein'
  },
  {text:'"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."', author:'-Malcolm X'
  },
  {text:'"If you think education is expensive, try ignorance."', author:'-Andy McIntyre'
  },
  {text:'"It is impossible for a man to learn what he thinks he already knows."', author:'-Epictetus'
  },
  {text:'"I did then what I knew how to do. Now that I know better, I do better."', author:'-Maya Angelou'
  },
  {text:'"Everyone you will ever meet knows something you don’t."', author:'-Bill Nye'},
  {text:'"Live as if you were to die tomorrow. Learn as if you were to live forever."', author:'-Mahatma Gandhi'},
  {text:'"Education is the most powerful weapon which you can use to change the world."', author:'-Nelson Mandela'},
  {text:'"To teach is to learn twice."', author:'-Joseph Joubert'}
]

const QuoteBox = ({ quote, handleNewQuote }) => 
  <div id="quote-box">
  <p id="text">{quote.text}</p>
  <h2 id="author">{quote.author}</h2>
    <div id="actions">
      <button class="button" id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <button class="button"><a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><i class="fab fa-twitter"></i></a></button>
    </div>
  </div>

const getRandomIndex = () => 
  Math.round(Math.random() * (quoteData.length - 1));


const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  return (
  <div class="main">
    <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
  </div>
)
}

ReactDOM.render(<App />, document.querySelector("#app"))


