import styled from "styled-components";

const MyButton = styled.button`
height: 5rem;
width: 5rem;
padding: 2rem;
background-color: #ff7faa;
text-align: center;
&:hover{
    padding: 3rem;
}
`



const Button = ({ changeNames, message, id }) => {

    return (
        <>
            <MyButton onClick={id === 1 ? changeNames : undefined}> {message} </MyButton>

        </>
    )
}

export default Button
