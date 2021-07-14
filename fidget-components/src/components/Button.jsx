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



const Button = ({message, id, status, changeNames}) => {

    
        
      
    return (
        <>
           <MyButton onClick={()=>changeNames(id,message,status)}>{message} </MyButton>
            
        </>
    )
}

export default Button
