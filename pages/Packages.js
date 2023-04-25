import React, {useState} from 'react';
import Card from "../components/Card";
import ServiceCounter from "../components/ServiceCounter";
import ServiceImage from '../components/ServiceImage';

const total = [
    {
    service: 'Massage',
    price: 70,
    },
    {
    service: 'Manicure',
    price: 30,
    },
    {
    service: 'Pedicure',
    price: 35,
    },
]; 

const Packages = () => {

// Set initial value for 'count' to 0;
const [counts, setCounts] = useState({
  Massage: 0,
  Manicure: 0,
  Pedicure: 0
});

// To update the type of service's count 
const handleCountChange = (service, count) => {
    setCounts((prevState) => ({ //state updater function to update state
      ...prevState,   // spread the previous state 
      [service]: count, // Update the given service name with the new count value
    }));
};

// To calculate the sum 
const calculateTotal = () => {
  let sum = 0;

  //Go through each object in the 'total' array 
  for (const index in total) {
      sum += counts[total[index].service] * total[index].price;
  }

  //console.log('Total:', sum);
  return sum;
};

  // Display page
  return(
    <div>
      <h3>Types of Services</h3>
      <h5>(Taxes included)</h5>

      <div className="row">

        {/* Massage Service Card*/}
        <div className="col">
          <Card>
            <h2>Massage</h2>
            <h4>Cost: ${total[0].price}</h4>
            <img src={ServiceImage.massage} alt="Massage" style={{ width: '350px', height: '250px', objectFit: 'cover' } }/>

            <ServiceCounter
              count={counts["Massage"]} // Set the count prop to the current Massage's count counter value
              onChange={(count) => handleCountChange("Massage", count)} // Set the onChange prop when the with the new count value. Using this value, will call the handleCountChange 
            />
            
          </Card>
        </div>

        {/* Manicure Service Card*/}
        <div className="col">
          <Card>
            <h2>Manicure</h2>
            <h4>Cost: ${total[1].price}</h4>
            <img src={ServiceImage.manicure} alt="Manicure" style={{ width: '350px', height: '250px' , objectFit: 'cover' }}/>

            <ServiceCounter
              count={counts["Manicure"]} // Set the count prop to the current Manicure's count counter value
              onChange={(count) => handleCountChange("Manicure", count)} // Set the onChange prop when the with the new count value. Using this value, will call the handleCountChange 
            />

          </Card>
        </div>

        {/* Pedicure Service Card*/}
        <div className="col">
          <Card>
            <h2>Pedicure</h2>
            <h4>Cost: ${total[2].price}</h4>
            <img src={ServiceImage.pedicure} alt="Pedicure" style={{ width: '350px', height: '250px', objectFit: 'cover'  }}/>

            <ServiceCounter
              count={counts["Pedicure"]} // Set the count prop to the current Pedicure's count counter value
              onChange={(count) => handleCountChange("Pedicure", count)} // Set the onChange prop when the with the new count value. Using this value, will call the handleCountChange 
            />

          </Card>
        </div>
      </div>

      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
};

export default Packages