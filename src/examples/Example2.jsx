/**
 * Example 2
 *
 * Composing components
 */
import { Component } from 'react'

// Using class components

export class MyComponent extends Component {
    render() {
        return (
            <div>
                <p>This component has a child component!</p>
                {/* Components can be used by other components in JSX */}
                <Label label="Workshop Name" text="React" />
            </div>
        )
    }
}

class Label extends Component {

    render() {
        return <p>{this.props.label}: {this.props.text}</p>
    }
}

// Using functional components

export function MyFunctionalComponent() {
    return (
        <div>
            <p>This component has a child component!</p>
            <FunctionalLabel label="Workshop Name" text="React" />
        </div>
    )
}

function FunctionalLabel(props) {
    return <p>{props.label}: {props.text}</p>
}
