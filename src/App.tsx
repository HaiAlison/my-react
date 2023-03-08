import React from 'react';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistant
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa101"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                image={CortanaImage}
                description="Cortana was created by Microsoft, who knows what is does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was created by Apple and being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
