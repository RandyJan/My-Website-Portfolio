import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react';
import POS from '../../assets/images/POS2.png'
import OT from '../../assets/images/ordertaker.png'
import API from '../../assets/images/API.png'
import MOBILE from '../../assets/images/mobile.png'
import PROTO from '../../assets/images/prototype.png'
import "./index.scss";
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
        <div className="containerb portfolio-page">
        <div className='test'>
        <div className="my-text-zone">
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
        <div className='project-container'>
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={POS} alt="Avatar" />
     <p>
     C# Point Sale System
        </p>
    </div>
    <div class="flip-card-back">
      <h1>Point of Sale System</h1>
      <p>Is a system made in c# language in .NET framework. It is combination of hardware and software that allows businesses to process sales transactions
        .This software is accredited by the BIR.
      </p>
      <p>Capabilities:<br/>
      <b>1. Transaction Processing</b>
      <br/>
      Facilitates sales by accepting various payment methods, including cash, credit/debit cards, and mobile payments.
      <br/>
    <b>2. Sales Reporting</b><br/>
    Generates detailed sales reports Z reading, X reading,cummulative sales and etc.
        <br/>
       <b> 3. Generate softcopy/hardcopy receipts</b><br/>
       Using various types of printer the system is able to provide receipts
      </p>
      <a className='flat-button'>Check it out!</a>

    {/* <ul>
        <li>Transaction Processing</li>
        <li>Sales Reporting</li>
        <li>Customer Management</li>
    </ul> */}
   
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={OT} alt="Avatar" />
      <p>
        Web Based Order Taker
        </p>
    </div>
    <div class="flip-card-back">
      <h1>Web Based Order Taker</h1>
      <p>Web app made from laravel with vuejs. It is a digital solution designed to streamline the process of taking orders for businesses,
         particularly in the food service and retail industries.</p>
      <p>Capabilities:<br/>
      <b>1. Real-Time Order Management</b><br/>
      Allows for immediate updates and tracking of orders as they are placed.
      <br/> 
      <b>2. Generates Receipts With QR code </b><br/>
        Upon inputing the desired order, the system is able to 
        provide acknowledgement receipts with QR code.
        <br/> 
      <b>3. VAT and Discounts </b><br/>
        The system is capable of computing Vatable sales,Vat amount,Vat exempt,
        zero rated sales, and discounts aligned with formula given by BIR

      </p>
      <a className='flat-button'>Check it out!</a>

    </div>
    
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={API} alt="Avatar" />
      <p>
        Restful API (Laravel & CodeIgniter)
        </p>
    </div>
    <div class="flip-card-back">
      <h1>Restful API</h1>
      <p>An API (Application Programming Interface) developed using CodeIgniter and Laravel provides a robust and efficient way to facilitate communication between different software applications.</p>
      {/* <p>We love that guy</p> */}
      <a className='flat-button'>Check it out!</a>

    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={MOBILE} alt="Avatar" />
      <p>
      Flutter and Java Mobile App
        </p>
    </div>
    <div class="flip-card-back">
      <h1>Flutter and Java Mobile App</h1>
      <p><b>1. BMI Calculator</b><br/>Flutter android app used to calcute user's BMI and compute body fats and muscles</p>
      <p><b>2. Ingredients Recommender AI based</b><br/>An android app developed using Java language. Main purpose is to recommend to user alternative ingredients. Its powered by Gemini AI.</p>   
         <p><b>3. My Notes</b><br/>Flutter android app used to take down notes.</p>

        <a className='flat-button'>Check it out!</a>
    </div>
    
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={PROTO} alt="Avatar" />
      <p>
      Arduino Prototype
        </p>
    </div>
    <div class="flip-card-back">
      <h1>Arduino Prototype</h1>
      <p><b>1. Automatic Plant Watering Device</b></p>
      <p><b>2. Water Quality Monitoring Device</b></p>
      <p><b>3. Room Monitoring Device</b></p>


      {/* <p>Web app made from laravel with vuejs. It is a digital solution designed to streamline the process of taking orders for businesses,
         particularly in the food service and retail industries.</p>
      <p>Capabilities:<br/>
      <b>1. Real-Time Order Management</b><br/>
      Allows for immediate updates and tracking of orders as they are placed.
      <br/> 
      <b>2. Generates Receipts With QR code </b><br/>
        Upon inputing the desired order, the system is able to 
        provide acknowledgement receipts with QR code.
        <br/> 
      <b>3. VAT and Discounts </b><br/>
        The system is capable of computing Vatable sales,Vat amount,Vat exempt,
        zero rated sales, and discounts aligned with formula given by BIR

      </p> */}
    </div>
    
  </div>
</div>
        </div>
        {/* <div className='imageSlider'>

        </div> */}
        </div>
        </div>
        <Loader type='pacman'/>
        </>

    )
}

export default Portfolio