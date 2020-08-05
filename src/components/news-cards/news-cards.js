import React from 'react'
import SingleNewsCard from '../single-news-card/single-news-card'

const NewsCards = ({ articles }) => {
  return (
    <div>
    
      {/* <h1>NewsCards</h1> */}
      { articles.map((article, i) => (
        <SingleNewsCard />
      ))}
      
    </div>
  )
}

export default NewsCards;
