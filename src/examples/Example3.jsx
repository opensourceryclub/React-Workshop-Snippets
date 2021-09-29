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
            {props.children}
        </div>
    )
}

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
