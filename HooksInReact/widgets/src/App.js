import AccordionView from './Accordion'
import { Container } from 'semantic-ui-react'
function App() {

  const items = [
    { title: 'What is React?', content: 'React is a frontend javascript framework' },
    { title: 'Why use React?', content: 'React is a favorite library among engineers' },
    { title: 'How do you use React?', content: 'Build small components to be composed onto the screen' }
  ]
  return (
    <Container>
      <h1>Hello ReactHooks Widgets</h1>
      <AccordionView items={items} />
    </Container>
  );
}

export default App;
