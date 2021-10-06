import React from 'react'

const FunctionalComponent = ({ greeting }) => {
    return (
        <h3 style={{ padding: '10px' }}>{greeting}</h3>
    )
}

/*

 Could also write it as 

 const FunctionalComponent = function () {
    return <h3>Hello</h3>
}

ES2015 version is (just drops the funtion declaration for arrow function)

 const FunctionalComponent = () => {
    return <h3>Hello</h3>
}

*/

export default FunctionalComponent;