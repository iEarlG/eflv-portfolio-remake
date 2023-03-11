import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {

    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => { 
        setLoading(false);
        setIsFormSubmitted(true);
      });
  };

  return (
    <>
      <h2 className="head-text">Project in <span>Mind? Chat</span> with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-art">
          <img src={images.email} alt="email" />
          <a href="mailto:villapaz.earl01@gmail.com" className="p-text">villapaz.earl01@gmail.com</a>
        </div>
        <div className="app__footer-art">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+639774227996" className="p-text">+63 977 4227 996</a>
        </div>
      </div>

    {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your name*" value={name} name="name" onChange={handleChangeInput} required />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your email*" value={email} name="email" onChange={handleChangeInput} required />
        </div>

        <div>
          <textarea className="p-text" placeholder="Your Project in mind*" value={message} name="message" onChange={handleChangeInput} required />
        </div>

        <button type="submit" className="p-text" onClick={handleSubmit}>{loading ? "Sending Message" : "Send Message"}</button>
      </div>
      : 
      <div>
        <h3 className="head-text">Thankyou for getting in touch with me ♡</h3>
      </div>
    }
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', "app__whitebg");