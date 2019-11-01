import * as React from 'react'

const Component = () => {

    type Partial<T> = {
        [P in keyof T]: T[P]
    };
    type Any = {
        value: <A extends Partial<A>>() => void
    }
    const createAny = (value: any): Any => (value)
    const arr = [createAny('str'), createAny(2), createAny("String")]

    return (
        <p>Hello</p>
    )
}
export default Component