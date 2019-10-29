import * as React from "react";
import style from 'styled-components'

interface Props {
    name?: string
}

const AnimationExample:React.FC<Props> = () => (
 <Heading>
     User Page
 </Heading>
);

const Heading = style.h1`
    color: palevioletred;
`

export default AnimationExample;