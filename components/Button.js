import styled from 'styled-components';

const Button = styled.button`
    color: black;
    background-color: ${(props) => {
        if (props.color === 'home_appointment'){
            return 'lightblue';    
        }
        if (props.color === 'home_products'){
            return 'red';    
        }
        if (props.color === 'service'){
            return 'pink';    
        }
        return '#666'; 
    }};
    margin: 25px;
    border: 0;
    padding: 15px 20px;
    border-radius: 4px;
    font-size: 20px;
`;

export default Button;