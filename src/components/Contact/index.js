import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState,useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer,TileLayer,Popup,Marker, ZoomControl } from 'react-leaflet';
const Contact = () => {
   const  [letterClass, setLetterClass]= useState('text-animate')
   const sendEmail = (e) => {
    e.preventDefault()
    emailjs
    .sendForm(
        'service_sdrw7gu',
        'template_4ezccpq',
        refForm.current,{publicKey:
        'SPqSOVg7qPafE6D-H'}

    )
    .then(
        ()=>{
            alert('Message succesfully sent!')
            window.location.reload(false)
        },
        (error)=>{
            alert('Failed to send the message',error.text)
            console.log('FAILED...', error.text);
        }
    )
};
    const refForm = useRef();
   useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

 
    return () => clearTimeout(timeoutId);
}, []);
    return(
        <>
        
        <div className='container contact-page'>
            <div className='text-zone'>
        <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
        </h1>
        <p>
        I am driven by a strong sense of purpose and goal orientation. I approach each 
            project with clear objectives in mind, striving to deliver results that not only 
            meet but exceed expectations.
        </p>
        <div className='contact-form'>
            <form ref = {refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required/>
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required/>
                    </li>
                    <li>
                        <input placeholder = 'Subject' type = 'text' name = 'subject' required/>
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required>

                        </textarea>
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value="SEND"/>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    <div className='info-map'>
        San pedro Laguna
        <br/>
        Philippines
        <br/>
        Camella Annex, Brgy Cuyab
        <span>rongcales14@gmail.com</span>
    </div>
    <div className='map-wrap'>
        <MapContainer center={[14.371751444611709, 121.05629769077373]}  zoom ={13}>

            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            <Marker position={[14.371751444611709, 121.05629769077373]}>
                <Popup>
                    Randy Jan lives here, come over for a cup of coffee
                </Popup>
            </Marker>
        </MapContainer>
    </div>
</div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact;