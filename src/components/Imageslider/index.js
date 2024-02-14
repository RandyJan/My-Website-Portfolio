import { Carousel } from 'bootstrap'; // Make sure to check the correct import path
import RJLOGO from '../../assets/images/myself.png'
const Imageslider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={RJLOGO}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Item components as needed */}
            </Carousel>
        </>
    );
}

export default Imageslider;
