import LogoTitle from '../../assets/images/logo-s.png';
import RJLOGO from '../../assets/images/RJLOGO.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';
const Home = () =>{
   const  [letterClass, setLetterClass]= useState('text-animate')
   const nameArray = ['a','n','d','y','','J','a', 'n']
   const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r','.']
  
   useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
}, []);


   return(
    <>        <div className="home-page reverse">

        <div className="text-zone">
       
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img src={RJLOGO} alt="developer"/>
           
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray} idx={15}/>
            <br/>
            
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray} idx={22}/>
            </h1>
            <h2>Fullstack Developer / Javascript Expert/ Node.js /Laravel & React/C#.NET/Flutter/C++/XML</h2>
            <Link to ="/contact" className = 'flat-button'>CONTACT ME</Link>
        </div>
       
        <Logo/>
       
        </div>
        <Loader type='pacman'/>
        </>

    )
}

export default Home