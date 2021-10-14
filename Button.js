import './table.css'
import styled from 'styled-components';
const Btn = styled.button`
border: 2px sold black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
width: 10rem;
`;

const Button = ({name,action,id})=>{
    return (
        <Btn onClick={()=>action(id)}>{name}</Btn>
    )
}

export default Button;