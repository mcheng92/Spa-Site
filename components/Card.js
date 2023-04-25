import styled from 'styled-components';

const Card = styled.div`
    height: 475px;
    width: 400px;
    background-color: ${(props) => { 
    if (props.color === 'service_oil'){
        return 'lightblue';    
    }
    if (props.color === 'face_mask'){
        return 'lightgreen';    
    }
    if (props.color === 'moisturizer'){
        return 'pink';    
    }
    if (props.color === 'hand_cream'){
        return 'lavender';    
    }
    return 'white';
    }};

    margin: 10px;
    padding: 15px;
    border-radius:4px;
    box-shadow: 0 1px 3px 
    min-height: 200px;
    `;

export default Card