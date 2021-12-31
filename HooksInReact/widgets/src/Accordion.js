import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const AccordionView = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const modifiedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <Accordion.Title
                    active={activeIndex === index}
                    index={index}
                    onClick={() => { setActiveIndex(index) }}
                >
                    <Icon name='dropdown' />
                    {item.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                    <p>{item.content}</p>
                </Accordion.Content>
                <div className='ui divider' />
            </React.Fragment>
        )
    })
    return (
        <Accordion>
            {modifiedItems}
        </Accordion>
    )
}

export default AccordionView;