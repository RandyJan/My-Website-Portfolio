import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react';
// import Imageslider from '../Imageslider';
const Portfolio = () => {
    const  [letterClass, setLetterClass]= useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);

    return(
        <>
        <div className="container portfolio-page">
        <div className="text-zone">
        <h1 className='header1'>
            <AnimatedLetters letterClass = {letterClass} strArray = {['M','y',' ','P','r','o','j','e','c','t','s']} idx={15}/>
        </h1>
        <p>
        I bring a wealth of experience and expertise to the table as a skilled developer.
             With a solid foundation in programming languages, frameworks, and best practices
             , I have successfully delivered numerous projects that showcase my technical 
             proficiency and problem-solving abilities. My attention to detail, passion for
              clean and efficient code, and commitment to staying current with industry
               trends make me a valuable asset to any development team. I am confident in my 
               ability to tackle complex challenges, collaborate effectively with colleagues,
                and deliver innovative solutions that meet and exceed expectations.
       
        </p>
        </div>
        <div className='image-slider'>
        {/* <Imageslider/> */}

        </div>
        </div>
        <Loader type='pacman'/>
        </>

    )
}

export default Portfolio