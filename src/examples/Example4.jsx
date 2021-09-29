/**
 * Example 4
 *
 * Using state and event handlers
 */
import { Component } from 'react'

export class MyCounter extends Component {
    constructor(props) {
        super(props)
        this.state = { numClicks: 0 }
    }

    // Event handler that is called whenever the button is clicked
    handleClick = () => {
        this.setState({ numClicks: this.state.numClicks + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
                <p>The button has been clicked {this.state.numClicks} times.</p>
            </div>
        )
    }
}
