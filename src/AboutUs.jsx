import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">This is Coursera's garden party, when you know how to code but not to grow plants!</p>
      <p className="about-us-content">
        At Coursera's Garden Party, we bring you the best of two worlds: amazing code and... questionable gardening skills. 
        Our mission is simple: to deliver a wide variety of plants that may or may not survive your care (and ours). 
        Whether you’re looking for an air-purifying warrior or a plant that smells nicer than our debugging sessions, 
        we've got you covered (sort of).
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        Our team of coding ninjas has dedicated countless hours ensuring that our plants... at least start their journey in 
        good health. Sure, we’re better at JavaScript than we are at watering schedules, but hey, we all have our strengths! 
        Whether you’re a green-thumb guru or someone who Googles "how to keep a cactus alive," we’re here to share our plant 
        passion and hopefully not our bad habits.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        So, take a chance on Coursera's Garden Party—where code compiles and plants (occasionally) thrive. Join us in our mission 
        to turn brown thumbs into green ones, one accidental overwatering at a time!
      </p>
    </div>
  );
}

export default AboutUs;
