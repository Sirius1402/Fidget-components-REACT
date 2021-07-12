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



const Button = ({buttons, changeNames}) => {

    
        
      
    return (
        <div>
           {buttons.map(item=><MyButton onClick={changeNames}>{item.message}</MyButton>)}
            
        </div>
    )
}

export default Button
