import React from 'react';
import { MyComponent, MyFunctionalComponent } from './Example2'

export default {
    component: MyComponent,
    title: 'Examples/Example 2: Composing Components'
}

export const ClassComponent = () => <MyComponent />
export const FunctionalComponent = () => <MyFunctionalComponent />
