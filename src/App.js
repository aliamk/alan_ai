import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/news-cards/news-cards.js'
import useStyles from './styles.js'

const alanKey = '0d842ac81e06315416a27594a8ce92f22e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

  const [newsArticles, setNewsArticles] = useState([])

  const classes = useStyles()

  useEffect(() => {
    alanBtn({                                    // Displays the alan button
      key: alanKey,                              // Uses the api key
      onCommand: ({ command, articles }) => {   // first command that worked
        if(command === 'newHeadlines') {
          // alert('This code was executed')
          console.log(articles)
          setNewsArticles(articles) // from useState
        }
      }
    })
  }, [])

  return (
    <div>
      {/* <h1>Alan AI</h1> */}
      <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt={classes.alanLogo} />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  )
}

export default App
