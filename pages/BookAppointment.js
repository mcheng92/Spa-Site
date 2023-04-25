import * as React from 'react';
import styled from 'styled-components';
import Card from '../components/Card'; 

// Form styling
const FormContainer = styled.div`
    width: 500px;
    margin: auto;
    margin-top: 40px;
    text-align: left;
`;

// Submit button styling
const SubmitButtonContainer = styled.div`
    margin: 10px;
    background-color: pink;
    display: flex;
    justify-content: center;
    padding: 15px;
    border-radius: 4px;
`;

class Appointment extends React.Component {
    constructor() {
        super();

        // Set Current Field Value
        this.state = {
            name: '',
            service: '',
            phone_Number: '',
            message: ''
        }
    }

    // Name Field Change
    handleNameFieldChange = (event) => {
        this.setState ({
            name: event.target.value
        })
    }

    // Service Field Change
    handleServiceFieldChange = (event) => {
        this.setState ({
            service: event.target.value
        })
    }

    // Phone Field Change
    handlePhoneFieldChange = (event) => {
        this.setState ({
            phone_Number: event.target.value
        })
    }

    // Message Field Change
    handleMessageFieldChange = (event) => {
        this.setState ({
            message: event.target.value
        })
    }

    // Form submission - Go here when submit is clicked
    handleSubmit = () =>{
        const {name,service, phone_Number, message} = this.state;

        // To show in console
        const form = {
            name,
            service,
            phone_Number,
            message
        };
        console.log(form); 

        // Reset the field when the submit button is pressed
        this.setState({
            name: '',
            service: '',
            phone_Number: '',
            message: ''
          })
    }    

    render() {

        const {name, service, phone_Number, message} = this.state;
        return (
            <FormContainer>
                <Card>
                    <p className='lead'>Schedule an appointment</p>

                    {/* Name Field */}
                    <div class="form">
                        <label htmlFor='name'>Name:</label>
                        <input 
                            type='text' 
                            id='name' 
                            className='form-control'
                            value={name}
                            onChange={(event) => this.handleNameFieldChange(event)} />
                    </div>

                    {/* Select Field */}
                    <div class="form">
                        <label htmlFor='service'>Type of Service:</label>
                        <select  
                            id='service' 
                            className='form-control' 
                            value={service}
                            onChange={e => this.handleServiceFieldChange(e)}
                        >
                            <option value="N/A">None Selected</option>
                            <option value="Manicure">Manicure</option>
                            <option value="Pedicure">Pedicure</option>
                            <option value="Massage">Massage</option>
                            <option value="Facial">Facial</option>
                        </select>
                    </div>

                    {/* Phone Field */}
                    <div class="form">
                        <label htmlFor='Phone_Number'>Phone Number:</label>
                        <input
                            type='text' 
                            id='Phone_Number' 
                            className='form-control' 
                            value={phone_Number}
                            onChange={e => this.handlePhoneFieldChange(e)}
                        />    
                    </div>

                    {/* Message Field */}
                    <div class="form">
                        <label htmlFor='message'>Message:</label>
                        <textarea 
                            type='text' 
                            name='message' 
                            id='message' 
                            className='form-control' 
                            rows='5'
                            value={message}
                            onChange={e => this.handleMessageFieldChange(e)}
                            >
                        </textarea>
                    </div>

                    <div className='form-group'>
                        <SubmitButtonContainer color='form' onClick={this.handleSubmit}>Submit</SubmitButtonContainer>
                    </div>
                    
                </Card>
            </FormContainer>
        );
    };
};

export default Appointment;