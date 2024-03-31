import React from 'react';
import "./About.css";
import taxTransparencyImage from '../Images/Image_1.png'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={taxTransparencyImage} alt="Tax Transparency" />
      </div>

      <div className="about-content">
        <h1>About Track My Tax Project</h1>
        <p>
  In the modern era, achieving financial transparency within governmental operations poses a notable challenge. The general populace often finds themselves deprived of clear, current insights into the deployment and utilization of their tax contributions. This opacity can foster a climate of doubt, distrust, and potentially, the misappropriation of public funds.
</p>
<p>
  TaxTransparency is our initiative aimed at confronting this pivotal concern through the creation of a decentralized application (DApp). This DApp harnesses the power of blockchain technology and smart contracts to establish a secure, unalterable, and openly accessible record of every financial transaction undertaken by the government.
</p>

      </div>
    </div>
  );
};

export default About;
