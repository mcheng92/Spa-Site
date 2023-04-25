import spa_area from '../assets/home/spa_area.jpg'
import Button from '../components/Button'
import {Link} from 'react-router-dom'


const Home = () => {

    //Display page
    return (
        <div>
            {<img src={spa_area} alt="spa_area" width={1200} height={500}></img>} 
            <p className="lead">Welcome to Popo Spa salon! We offer a variety of facial and body products and treatment cares with our specialty baths, saunas, massages, manicures, and more.</p>
            <div>

                <Link to="/book-appointment">
                <Button color="home_appointment">Book a service</Button>
                </Link>

                <Link to="/products">
                <Button color="home_products">View Product</Button>
                </Link>

            </div>
        </div>
    );
}

export default Home;