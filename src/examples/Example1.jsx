/**
 * Example 1
 *
 * Hello world component
 */
import { Component } from 'react'

/**
 * React components are classes that extend {@link Component} and implement
 * a render method. The render method must return JSX.
 */
export class MyFirstComponent extends Component {
    render() {
        return <p>Hello, World!</p>
    }
}

/**
 * Components can also be functions that return {@link JSX}.
 * 
 * @returns {JSX.Element}
 */
export function MyFirstFunctionComponent() {
    return <p>Hello, World!</p>
}

