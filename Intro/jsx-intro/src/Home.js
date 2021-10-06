import React from 'react';

function Home() {
    const me = {
        first: 'Adam',
        last: 'Ahrens',
        fullName: function () {
            return this.first + " " + this.last
        }
    }

    const customStyles = { padding: '10px', color: 'green' }

    return (
        <h1 style={customStyles}>Home Component made by {me.fullName()}</h1>
    )
}

export default Home