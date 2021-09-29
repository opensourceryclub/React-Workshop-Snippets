/**
 * Example 4
 * 
 * Rendering lists
 */
import { Component } from 'react'

/**
 * Displays a shopping list. Items are colored using the `color` prop.
 */
export class ShoppingList extends Component {

    render() {
        const {
            evenColor = 'red',
            oddColor = 'blue'
        } = this.props
        const shoppingList = [
            'apples',
            'bananas',
            'coffee',
            'bagels',
            'more bagels',
            'MORE BAGELS'
        ]

        return (
            <div>
                <h2>Things to buy at the store:</h2>
                <ol>
                    {/** String list -> JSX list */}
                    {shoppingList.map(
                        (item, i) =>
                            <ShoppingListEntry
                                key={item}
                                toBuy={item}
                                color={i % 2 === 0
                                    ? evenColor
                                    : oddColor}
                            />
                    )}
                </ol>
            </div>
        )
    }
}

function ShoppingListEntry(props) {
    /** @type {React.CSSProperties} */
    const cssStyle = {
        color: props.color // Set the text color
    }

    return (
        <li style={cssStyle}>{props.toBuy}</li>
    )
}