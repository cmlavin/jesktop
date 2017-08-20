import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Select } from 'semantic-ui-react'

const Homepage = (props) => {

  let options = [
  { "data-category": "art", value:'art', text: 'Art'},
  { "data-category": "animals", value:'animals', text: 'Animals'},
  { "data-category": "entertainment-board-games", value:'entertainment-board-games', text: 'Board Games'},
  { "data-category": "entertainment-books", value:'entertainment-books', text: 'Books'},
  { "data-category": "entertainment-cartoon-animations", value:'entertainment-cartoon-animations', text: 'Cartoon & Animation'},
  { "data-category": "celebrities", value:'celebrities', text: 'Celebrities'},
  { "data-category": "entertainment-comics", value:'entertainment-comics', text: 'Comics'},
  { "data-category": "science-computers", value:'science-computers', text: 'Computers'},
  { "data-category": "entertainment-film", value:'entertainment-film', text: 'Film'},
  { "data-category": "science-gadgets", value:'science-gadgets', text: 'Gadgets'},
  { "data-category": "general-knowledge", value:'general-knowledge', text: 'General Knowledge'},
  { "data-category": "geography", value:'geography', text: 'Geography'},
  { "data-category": "history", value:'history', text: 'History'},
  { "data-category": "entertainment-japanese-anime-manga", value:'entertainment-japanese-anime-manga', text: 'Japanese Anime & Manga'},
  { "data-category": "science-mathematics", value:'science-mathematics', text: 'Mathematics'},
  { "data-category": "entertainment-music", value:'entertainment-music', text: 'Music'},
  { "data-category": "entertainment-musicals-theatres", value:'entertainment-musicals-theatres', text: 'Musicals & Theatre'},
  { "data-category": "mythology", value:'mythology', text: 'Mythology'},
  { "data-category": "politics", value:'politics', text: 'Politics'},
  { "data-category": "entertainment-tv", value:'entertainment-tv', text: 'TV'},
  { "data-category": "entertainment-video-games", value:'entertainment-video-games', text: 'Video Games'},
  { "data-category": "science-nature", value:'science-nature', text: 'Science & Nature'},
  { "data-category": "sports", value:'sports', text: 'Sports'},
  { "data-category": "vehicles", value:'vehicles', text: 'Vehicles'}
]
  return(
    <div>
      <Link to='game'><Button onClick={props.start}>Play</Button></Link>
      <Select id="selected"
        options={options}
      />

    </div>
  )
}

export default Homepage;

// <option value="art">Art</option>
// <option value="animals">Animals</option>
