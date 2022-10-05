import React from "react";
import {Glass, Section} from './background.styles'
import homeImage from "../airport.png"

export const Background=({children})=> {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
          <Glass>
          <h2>Know Name of Toursist Places with an image</h2>
          <p>
            The site uses the provided image to predict the name of tourist locations in ASIA. 
            This webiste uses <strong>Machine Learning</strong> and can predict around <strong>98949</strong> places in ASIA.
          </p>
          </Glass>
        {children}
      </div>
    </Section>
  );
}

