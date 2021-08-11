import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    width: 30vw;
    height: 30vh;
    background-color: aquamarine;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`

const Button = styled.button`
height: 5rem;
width: 5rem;
padding: 2rem;
background-color: #ff7faa;
text-align: center;
font-size: 1.2rem;
&:hover {
    padding: 3rem;
}
`

const CounterContainer = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <Container>
                <Button onClick={() => setCounter(counter + 1)}>+</Button>
                <div>{counter}</div>
                <Button onClick={() => setCounter(counter - 1)}>-</Button>
            </Container>

        </div>
    )
}

export default CounterContainer
