// Product page counter when clicked
import Button from '../components/Button';

// Takes the props 'count', 'onChange', 'ProductImage' , and 'altProductImage'
const Counter = ({ count, onChange, ProductImage, altProductImage }) => {

  // Go here when the button is clicked
  // Update the 'count' by calling the onChange function with the new count value
  const handleIncrement = () => {
    onChange(count + 1);
  };
  
  return (
    <div>
      <Button onClick={handleIncrement}>
        <img src={ProductImage} alt={altProductImage} style={{ maxWidth: "100%", maxHeight: "100%" }}/>
      </Button>
      <h4> Quantity: {count}</h4>
    </div>
  );
};

export default Counter;