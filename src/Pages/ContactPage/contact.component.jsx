import React from 'react';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className="skills">
            <h2>My Skills.</h2>

            <div className='intro'>
                <h3>Web Development</h3>
                <p>I am a Self-Taught Web Developer with experience in building Single Page Application</p>
                <p>If you have any problems or needs, May be I can help!</p>
            </div>

            <div className='intro'>
                <h3>Mobile Development</h3>
                <p>Building Native/ Cross Flatform Application</p>
                <p>Bring your million dollar ideas to life!</p>
            </div>

            <div className='intro'>
                <h2>Get In Touch !</h2>
                <h3>How about having a cup of coffee?</h3>
                <p>We can code while drinking coffee together.</p>
                <p>Want to do something crazy? Let's meet up!</p>
            </div>

            <div className="contact">
                <h2>For Work: </h2>
                <p>Email: jamesthang1996@gmail.com</p>
                <p>phone: (+84)0857713736</p>
            </div>
        </div>
    )
}

export default Contact
