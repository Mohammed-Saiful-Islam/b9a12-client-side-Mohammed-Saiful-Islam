import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    return (
<div>
    <Carousel className='pt-32'>
                <div className='h-full'>
                    <img className='h-full' src="https://i.ibb.co/9rqnFC6/Screenshot-108-Copy.png" />
                    
                </div>
                <div className='max-h-96'>
                    <img className='h-full ' src="https://img.freepik.com/free-photo/view-funny-animal_23-2151098383.jpg?t=st=1717484345~exp=1717487945~hmac=823702224671342580874f639e9eb69adaef3bcd97099380a801cde7f06c60ff&w=1060"/>
                    
                </div>
                <div className='max-h-96'>
                    <img className='h-full' src="https://img.freepik.com/free-photo/goldfish-swimming-glass-fishbowl-underwater-generative-ai_188544-31794.jpg?t=st=1717483812~exp=1717487412~hmac=35a953f944aaba2c12b1bb14e8ddc69e36bff797e948ef2d7ccbd7797c056a92&w=1380" />
                    
                </div>
                                
            </Carousel>
</div>
    );
};

export default Banner;