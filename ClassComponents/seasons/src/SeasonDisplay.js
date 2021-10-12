import React, { Component } from 'react'

class SeasonDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = { latitude: "Unknown", longitude: "Unknown", errorMessage: "" }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            this.setState({ latitude: `${position.coords.latitude}`, longitude: `${position.coords.longitude}` })
        }, (error) => {
            this.setState({ errorMessage: error.message })
            console.log(error)
        })
    }

    render() {
        /// Never add api calls or long running tasks here since it's called frequently.
        return (
            <div className="ui segment">
                <div>
                    <h2 className="ui header">SeasonDisplay</h2>
                    <h4 className="ui header">Latitude {this.state.latitude}</h4>
                    <h4 className="ui header">Longitude {this.state.longitude}</h4>
                    {this.state.latitude === "Unknown" && this.state.errorMessage.length === 0 && (
                        <div className="ui active dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    )}

                    {this.state.errorMessage.length !== 0 && (
                        <div className="ui negative message">
                            <div className="header">
                                We're sorry there was an error fetching your location
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default SeasonDisplay;