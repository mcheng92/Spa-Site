// Service page counter when clicked
import Button from './Button';

const Counter = ({ count, onChange }) => { // Takes the props 'count' and 'onChange'

  // Go here when the button is clicked
  // Update the 'count' by calling the onChange function with the new count value
  const handleIncrement = () => { 
      onChange(count + 1);
  };
  
  return (
    <div>
      <Button 
        onClick={handleIncrement} // Go to the handleIncrement function when the button is clicked
        color="service"
      >Click To Add Quantity: {count}</Button>
    </div>
  );
};

export default Counter;