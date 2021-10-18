import React, { Component } from 'react'

const seasonConfig = {
    unknown: {
        text: "Unknown ",
        icon: "large bug icon"
    },
    summer: {
        text: "Welcome to Summer",
        icon: "large sun icon"
    },
    winter: {
        text: "Brrr, it's cold outside",
        icon: "large lemon outline icon"
    }
}

// All this runs through babel to transcribe to a version of Javascript that all browsers know
class SeasonDisplay extends Component {

    // Alternate Method to init state outside a constructor
    // Babel will basically take this and implement the constructor function below
    state = { latitude: "Unknown", longitude: "Unknown", errorMessage: "", config: seasonConfig.unknown }

    // Avoid API requests in Constructor. Recommended in componentDidMount
    constructor(props) {
        super(props)

        // Only time we set state directly. Otherwise update state with this.setState() calls
        // this.state = { latitude: "Unknown", longitude: "Unknown", errorMessage: "" }
        console.log(`Constructor was called. ${JSON.stringify(props)}`)
    }

    // Perfect for initial data loading. Only called once.
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            let month = new Date().getMonth()
            let config = seasonConfig.unknown

            if (month > 2 && month < 9) {
                config = position.coords.latitude > 0 ? seasonConfig.summer : seasonConfig.winter
            } else {
                config = position.coords.latitude > 0 ? seasonConfig.winter : seasonConfig.summer
            }

            // Update state
            this.setState({ latitude: `${position.coords.latitude}`, longitude: `${position.coords.longitude}`, config })
        }, (error) => {
            this.setState({ errorMessage: error.message })
            console.log(error)
        })
    }

    render() {
        /// Never add api calls or long running tasks here since it's called frequently.
        // const season = this.determineSeason()
        // const icon = season === 'Winter' ? (<i className="snowflake outline icon"></i>) : (<i className="sun outline icon"></i>)
        return (
            <div className="ui segment">
                <div>
                    <h2 className="ui header">{this.props.title}</h2>
                    <h4 className="ui header">Latitude {this.state.latitude}</h4>
                    <h4 className="ui header">Longitude {this.state.longitude}</h4>
                    <h4 className="ui header">{this.state.config.text}</h4>
                    <h5 className="ui header"><i className={this.state.config.icon}></i></h5>

                    {this.state.latitude === "Unknown" && this.state.errorMessage.length === 0 && (
                        <div className="ui active dimmer">
                            <div className="ui text loader">Fetching Location</div>
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