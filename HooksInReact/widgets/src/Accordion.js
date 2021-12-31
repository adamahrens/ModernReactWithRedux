import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const AccordionView = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const modifiedItems = items.map((item, index) => {
        const isActive = activeIndex === index
        return (
            <React.Fragment key={item.title}>
                <Accordion.Title
                    active={isActive}
                    index={index}
                    onClick={() => { setActiveIndex(index) }}
                >
                    <Icon name='dropdown' />
                    {item.title}
                </Accordion.Title>
                <Accordion.Content active={isActive}>
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