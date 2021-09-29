import React from 'react'
import { ShoppingList } from './Example4'

export default {
    component: ShoppingList,
    title: 'Examples/Example 4: Rendering Lists'
}

export const RedShoppingList = args => <ShoppingList {...args} />
RedShoppingList.args = {
    evenColor: 'red',
    oddColor: 'blue'
}