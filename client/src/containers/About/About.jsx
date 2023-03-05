import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  { title: 'Mobile & Web Design', description: 'I am passionate for designing your Web & Mobile Applications ideas.', imgUrl: ''},
  { title: 'Frontend Development', description: 'I am passionate for building beautiful and interactive Web and Mobile Applications.', imgUrl: ''},
  { title: 'Backend Development', description: 'I am a passionate level Beginner advanced backend support dev I have learned a lot, but I need someone to teach me even more', imgUrl: ''},
  { title: 'Computer Literate', description: 'I have a knowledge and skills to be able to use computers; familiar with the operation of computers.', imgUrl: ''},
]

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know That <span>Good Devs & Designs </span> <br />
      Comes With <span>Great Clients</span></h2>

      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-items"
            key={about.title + i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;