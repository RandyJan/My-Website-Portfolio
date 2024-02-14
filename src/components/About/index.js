// import '../Layout/index.scss'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faGitAlt, faHtml5, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = ()=>{
    const  [letterClass, setLetterClass]= useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
        <h1>
            <AnimatedLetters letterClass={letterClass} strArray = {['A','b','o','u','t',' ','m','e']} idx={15}/>

        </h1>

        <p>As a web developer, I thrive on tackling challenging tasks that push the
             boundaries of my skills and knowledge. I have a proven track record of
              successfully navigating complex projects, problem-solving under pressure,
               and delivering high-quality solutions. I am passionate about staying abreast 
               of the latest technologies and methodologies, enabling me to adapt quickly to 
               new challenges and innovate effectively. I am confident in my ability to take
                on demanding projects, overcome obstacles, and contribute positively to your 
                team</p>
        <p>I am driven by a strong sense of purpose and goal orientation. I approach each 
            project with clear objectives in mind, striving to deliver results that not only 
            meet but exceed expectations. My focus on setting and achieving measurable goals 
            allows me to stay motivated, organized, and dedicated to producing high-quality 
            work. I am committed to continuous improvement, always seeking new challenges that
             will push me to grow professionally and contribute effectively to the success of
              the team and the organization.</p>
        <p>I bring a wealth of experience and expertise to the table as a skilled developer.
             With a solid foundation in programming languages, frameworks, and best practices
             , I have successfully delivered numerous projects that showcase my technical 
             proficiency and problem-solving abilities. My attention to detail, passion for
              clean and efficient code, and commitment to staying current with industry
               trends make me a valuable asset to any development team. I am confident in my 
               ability to tackle complex challenges, collaborate effectively with colleagues,
                and deliver innovative solutions that meet and exceed expectations.</p>
        <p></p>


            </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                <FontAwesomeIcon icon={faLaravel} color='#DD0032'/>
                </div>
                <div className='face2'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className='face3'>
                <FontAwesomeIcon icon={faPhp} color='#4F5D95'/>
                </div>
                <div className='face4'>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className='face5'>
                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                </div>
            </div>
            
        </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About