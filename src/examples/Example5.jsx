/**
 * Example 5
 * 
 * Lifecycle Methods and Conditional Rendering
 */
import { Component } from "react"

export class MyCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            timerId: null
        }
    }

    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    componentDidMount() {
        const timerId = setInterval(this.updateCounter, 1000)
        this.setState({ timerId: timerId })
    }

    componentDidUpdate() {
        console.log("Component was updated")
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId)
    }

    render() {
        return (
            <div>
                <h1>Lifecycle Example</h1>
                <p>Timer id: {this.state.timerId}</p>
                <p>Counter value: {this.state.counter}</p>
                {
                    this.state.counter % 2 === 0
                        ? <p>Counter value is even</p>
                        : <p>Counter value is odd</p>
                }
            </div>
        )
    }

}