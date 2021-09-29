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
    constructor(props) {
        super(props)
        this.state = {
            shoppingList: [
                'apples',
                'bananas',
                'coffee',
                'bagels',
                'more bagels',
                'MORE BAGELS'
            ]
        }
    }

    render() {
        const color = this.props.color || 'red'
        return (
            <div>
                <h2>Things to buy at the store:</h2>
                <ol>
                    {this.state.shoppingList.map(
                        item => <ShoppingListEntry key={item} item={item} color={color} />
                    )}
                </ol>
            </div>
        )
    }
}

function ShoppingListEntry(props) {
    const cssStyle = {
        color: props.color
    }

    return (
        <li style={cssStyle}>{props.item}</li>
    )
}