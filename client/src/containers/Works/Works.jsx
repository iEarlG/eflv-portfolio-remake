import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Works.scss';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWorks(data);
      })
  }, [])
  
  const handleWorkFilter = (item) => {

  }
  return (
    <>
      <h2 className="head-text">Simple But Attractive <span>Work Projects </span> <br />
      Comes With <span>Great Clients</span></h2>

      <div className="app__work-filter">
        {['Web Apps', 'Mobile Apps', 'UI/UX Designs', 'Full-Stack', 'All'].map((item, i) => (
          <div
            key={i}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, i) => (
          <div
            className="app__work-item app__flex"
            key={i}
          >
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Works, 'works');