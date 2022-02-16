import React, { useState, useEffect } from 'react'
import AccordionView from './Accordion'
import SearchWidget from './Search'
import DropdownWidget from './Dropdown'
import Translate from './Translate'
import Navigation from './Navigation'
import Route from './Route'
import { Container, Divider } from 'semantic-ui-react'

function App() {

  const panes = [
    { menuItem: 'Home' },
    { menuItem: 'Search' },
    { menuItem: 'Dropdown' },
    { menuItem: 'Translate' }
  ]

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
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    if (activeTab === 0 && window.location.pathname !== "/") {
      window.history.pushState({ page: "home" }, "home", "/")
      const event = new PopStateEvent('popstate')
      window.dispatchEvent(event)
    }
    else if (activeTab === 1 && window.location.pathname !== "/search") {
      window.history.pushState({ page: "search" }, "search", "/search")
      const event = new PopStateEvent('popstate')
      window.dispatchEvent(event)
    }
    else if (activeTab === 2 && window.location.pathname !== "/dropdown") {
      window.history.pushState({ page: "dropdown" }, "dropdown", "/dropdown")
      const event = new PopStateEvent('popstate')
      window.dispatchEvent(event)
    }
    else if (activeTab === 3 && window.location.pathname !== "/translate") {
      window.history.pushState({ page: "translate" }, "translate", "/translate")
      const event = new PopStateEvent('popstate')
      window.dispatchEvent(event)
    }
  }, [activeTab])

  return (
    <Container>
      <h1>Hello ReactHooks Widgets</h1>
      <Navigation activeTab={activeTab} updateTabIndex={setActiveTab} panes={panes} />

      <Route path="/">
        <AccordionView items={items} />
      </Route>

      <Route path="/search">
        <SearchWidget />
      </Route>

      <Route path="/dropdown">
        <Container>
          <DropdownWidget option={option} onOptionChanged={setOption} options={options} placeholder="Select Color" />
          <Divider />
          <DropdownWidget option={movie} onOptionChanged={setMovie} options={movies} placeholder="Select Movie" />
        </Container>
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </Container>
  );
}

export default App;
