import React from 'react'
import { Container, Dropdown, Segment } from 'semantic-ui-react'

const DropdownWidget = (props) => {
    return (
        <Container>
            <Dropdown
                placeholder={props.placeholder}
                selection
                options={props.options}
                value={props.option.value}
                onChange={(_event, { value }) => {
                    props.onOptionChanged(value)
                }}
            />

            <Segment secondary>
                <pre>Current value: {JSON.stringify(props.option)}</pre>
            </Segment>
        </Container>
    )
}

export default DropdownWidget