import React from 'react';
import { MyFirstComponent, MyFirstFunctionComponent } from './Example1'
export default {
    component: MyFirstComponent,
    title: 'Examples/Example 1: Hello World'
}

export const HelloWorldClassComponent = () => <MyFirstComponent />
export const HelloWorldFunctionalComponent = () => <MyFirstFunctionComponent />
