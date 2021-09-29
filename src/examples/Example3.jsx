/**
 * Example 3
 *
 * Using children
 */

import { Component } from "react";

function ChildComponent(props) {
    return (
        <div>
            <p>This component has children!</p>
            {/* What happens if the line below is removed? */}
            {props.children}
        </div>
    )
}

/**
 * Putting JSX inside a components's opening and closing tags passes them 
 * as props.
 */
export class ParentComponent extends Component {
    render() {
        return (
            <ChildComponent>
                <p>This is a child component</p>
                <p>This is too</p>
            </ChildComponent>
        )
    }
}
