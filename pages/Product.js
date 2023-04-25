import React, {useState} from 'react';
import Card from "../components/Card";
import ProductCounter from "../components/ProductCounter"
import ProductImage from '../components/ProductImage';

const subtotal = [
    {
    product: 'Oil',
    price: 20,
    },
    {
    product: 'Mask',
    price: 30,
    },
    {
    product: 'Moisturizer',
    price: 15,
    },
    {
    product: 'Cream',
    price: 10,
    }
] 

const Products = () => {

// Set initial value for 'count' to 0;
const [counts, setCounts] = useState({
    Oil: 0,
    Mask: 0,
    Moisturizer: 0,
    Cream: 0
});

const handleCountChange = (product, count) => {
    setCounts((prevState) => ({
      ...prevState,
      [product]: count,
    }));
  };

const calculateSubtotal = () => {
    let sub = 0;
    for (const index in subtotal) {
      if (counts[subtotal[index].product]) {
        sub += counts[subtotal[index].product] * subtotal[index].price;
      }
    }
    console.log('Total:', sub);
    return sub;
}

const calculateTotal = () => {
    
    let total = calculateSubtotal() * 1.13;
    console.log('Total:', total);
    return total.toFixed(2);
}

  return(
    <div>
      <h3>Types of Products </h3>
      <p>(Click on image to add to card)</p>
            
      <div className ="row" >  

        <div className ="col" >
          <Card color="service_oil">
            <h3>Essential Oil</h3>
            <h5>Cost: ${subtotal[0].price}</h5>
                  
            <ProductCounter
              count={counts["Oil"]}
              onChange={(count) => handleCountChange("Oil", count)}
              ProductImage={ProductImage.essential_oil}
              altProductImage="essential_oil" 
            />
          </Card>
        </div>
              
        <div className ="col" >
          <Card color="face_mask">
            <h3>Hydration Face Mask</h3>
            <h5>Cost: ${subtotal[1].price}</h5>
                  
            <ProductCounter
              count={counts["Mask"]}
              onChange={(count) => handleCountChange("Mask", count)}
              ProductImage={ProductImage.face_mask}
              altProductImage="face_mask" 
            />
          </Card>
        </div>
            
        <div className ="col" >
          <Card color="moisturizer">
            <h3>Moisturizer</h3>
            <h5>Cost: ${subtotal[2].price}</h5>
                  
            <ProductCounter
              count={counts["Moisturizer"]}
              onChange={(count) => handleCountChange("Moisturizer", count)}
              ProductImage={ProductImage.moisturizer}
              altProductImage="moisturizer"   
            />
          </Card>
        </div>
            
        <div className ="col" >
          <Card color="hand_cream">
            <h3>Hand Cream</h3>
            <h5>Cost: ${subtotal[3].price}</h5>
                  
            <ProductCounter
              count={counts["Cream"]}
              onChange={(count) => handleCountChange("Cream", count)}
              ProductImage={ProductImage.hand_cream}
              altProductImage="hand_cream" 
            />
          </Card>
          </div>
      </div>
        
      <h2>Subtotal: ${calculateSubtotal()}</h2>
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  )
}

export default Products;