import React, { Component } from "react";
import welcome from "./sites-screenshots/welcome.png";
import login from "./sites-screenshots/login.png";
import register from "./sites-screenshots/register.png";
import dash from "./sites-screenshots/dashboard.png";
import landing from "./sites-screenshots/landing.png";
import join from "./sites-screenshots/join-game.png";
import userAvatar from "./sites-screenshots/user-avatar.png";
import lobby from "./sites-screenshots/lobby.png";
import game from "./sites-screenshots/game.png";
import "./Work.scss";
const stager = "http://stager.space";
const mememaster = "http://mememaster.fun";

class Work extends Component {
  render() {
    return (
      <div className="work-main">
        <div className="work-inner">
          <h1 className="my-work">My Work...</h1>
          <div className="paragraphs-work">
            <a href={stager}>www.stager.space</a>
            <p>
              As my personal project in DevMountain, I have decided to create a
              social site with the purpose of giving a stage to original
              creation of all kinds. I built this project using React js, SASS,
              Cloudinary, PostgreSQL, Node js, Express, and Redux. Please click
              the URL above to take a look!
            </p>
            <div className="screenshots-stager">
              <img src={welcome} alt="welcome" />
              <img src={login} alt="login" />
              <img src={register} alt="register" />
              <img src={dash} alt="dash" />
            </div>
            <a href={mememaster}>www.mememaster.fun</a>
            <p>
              Meme Master is my group project as a part of DevMountain Web
              Development program, where we made an online “What do you meme?”
              card game, using socket.io. My role was the entire front end, as
              well as animations and audio.
            </p>
            <div className="screenshots-meme">
              <img src={landing} alt="landing" />
              <img src={join} alt="join" />
              <img src={userAvatar} alt="avatar" />
              <img src={lobby} alt="lobby" />
              <img src={game} alt="game" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
