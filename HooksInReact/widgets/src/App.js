import React, { useState } from 'react'
import AccordionView from './Accordion'
import SearchWidget from './Search'
import DropdownWidget from './Dropdown'
import Translate from './Translate'
import { Container, Divider } from 'semantic-ui-react'

function App() {

  const items = [
    { title: 'What is React?', content: 'React is a frontend javascript framework' },
    { title: 'Why use React?', content: 'React is a favorite library among engineers' },
    { title: 'How do you use React?', content: 'Build small components to be composed onto the screen' }
  ]

  const options = [
    { key: 'red', text: 'The Color Red', value: 'red' },
    { key: 'green', text: 'Deep Green', value: 'green' },
    { key: 'blue', text: 'The Color of the Sky', value: 'blue' },
  ]

  const movies = [
    { key: '1', text: 'The Big Lebowski', value: 'the-big-lebowski' },
    { key: '2', text: 'Scream', value: 'scream' },
    { key: '3', text: 'Halloween (2018)', value: 'halloween-2018' },
  ]


  const [option, setOption] = useState(options[0])
  const [movie, setMovie] = useState(movies[0])

  return (
    <Container>
      <h1>Hello ReactHooks Widgets</h1>
      <AccordionView items={items} />
      <SearchWidget />
      <Divider />
      <DropdownWidget option={option} onOptionChanged={setOption} options={options} placeholder="Select Color" />
      <Divider />
      <DropdownWidget option={movie} onOptionChanged={setMovie} options={movies} placeholder="Select Movie" />
      <Divider />
      <Translate />
    </Container>
  );
}

export default App;
