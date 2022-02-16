import React from 'react'
import { Container, Tab } from 'semantic-ui-react'

const Navigation = ({ activeTab, updateTabIndex, panes }) => {
    return (
        <Container>
            <Tab
                menu={{ pointing: true }}
                panes={panes}
                activeIndex={activeTab}
                onTabChange={(e, { activeIndex }) => {
                    updateTabIndex(activeIndex)
                }} />
        </Container>
    )
}

export default Navigation