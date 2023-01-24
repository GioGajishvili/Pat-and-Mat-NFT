import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Discord from "./discord.svg";
import Instagram from "./instagram.svg";
import Twitter from "./twitter.svg";
import GoldenBoy from "./Components/Slider/PhotosNFT/goldenBoy.png";
import SilverBoy from "./Components/Slider/PhotosNFT/silverBoy.png";
import Zuko from "./Components/Slider/PhotosNFT/zuko.png";
import Rambo from "./Components/Slider/PhotosNFT/rambo.png";
import Marley from "./Components/Slider/PhotosNFT/marley.png";
import Matman from "./Components/Slider/PhotosNFT/matman.png";
import HappyGuy from "./Components/Slider/PhotosNFT/happyGuy.png";
import Kurtanidze from "./Components/Slider/PhotosNFT/kurtanidze.png";

import { toggleAccordionClass } from "./Components/Accordeon/Accordeon";
import Slideshow from "./Components/Slider/Slider";

function App(props) {
  return (
    <div className="main-container">
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between h-100 coordinate">
          <div className="logo">PM</div>
          <div className="header-left-section">
            <a href="#about-container" className="menu-link">
              About
            </a>
            <a href="#team-container" className="menu-link">
              Team
            </a>
            <a href="#faq-container" className="menu-link">
              FAQ
            </a>
            <a href="https://opensea.io/collection/patandmat" target="_blank">
              <button className="opensea-button">Opensea</button>
            </a>
          </div>
        </div>
      </header>
      <section className="leftright-container container-1 d-flex flex-1">
        <div className="left-section">
          <div className="header-text">
            <h1>
              <mark className="patandmat-mark">Pat and Mat</mark> <br></br> In
              XXI century <br></br> <mark className="nft-mark">NFT</mark>{" "}
              collection
            </h1>
            <p className="slogan">New Project with big future !</p>
            <div className="button-container">
              <a href="https://opensea.io/collection/patandmat" target="_blank">
                <button className="buy">Buy</button>
              </a>
            </div>
          </div>
          <div className="social-media-container mt-5">
            <a href="https://www.instagram.com/patandmatnft/" target="_blank">
              <img className="social-logo" src={Instagram}></img>
            </a>
            <a href="https://twitter.com/PatandMatNFT" target="_blank">
              <img className="social-logo" src={Twitter}></img>
            </a>
            <a href="https://discord.gg/cDPGvWJm" target="_blank">
              <img className="social-logo" src={Discord}></img>
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="slideshow-container">
            <div className="slideshow-image">
              <Slideshow />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h2 className="textview-artworks">Artwork of the week</h2>
        <div className="row artworks-wrapper">
          <div className="col-4">
            <a
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/50826227598767720252728106686251813542327958622201116550483384638219738939393"
              target="_blank"
            >
              <div className="artwork-container">
                <img className="nft-artwork" src={Zuko}></img>
                <span className="nft-name">Mat - Zuko</span>
              </div>
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/50826227598767720252728106686251813542327958622201116550483384649214855217153"
              target="_blank"
            >
              <div className="artwork-container">
                <img className="nft-artwork" src={Marley}></img>
                <span className="nft-name">Mat - Marley</span>
              </div>
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/50826227598767720252728106686251813542327958622201116550483384654712413356033"
              target="_blank"
            >
              <div className="artwork-container">
                <img className="nft-artwork" src={Rambo}></img>
                <span className="nft-name">Mat - Rambo</span>
              </div>
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/50826227598767720252728106686251813542327958622201116550483384652513390100481"
              target="_blank"
            >
              <div className="artwork-container">
                <img className="nft-artwork" src={Matman}></img>
                <span className="nft-name">Mat - Matman</span>
              </div>
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/50826227598767720252728106686251813542327958622201116550483384633821692428289"
              target="_blank"
            >
              <div className="artwork-container">
                <img className="nft-artwork" src={Kurtanidze}></img>
                <span className="nft-name">Pat - Kurtanidze</span>
              </div>
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/50826227598767720252728106686251813542327958622201116550483384631622669172737"
              target="_blank"
            >
              <div className="artwork-container">
                <img className="nft-artwork" src={HappyGuy}></img>
                <span className="nft-name">Mat - HappyGuy</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="about-container" className="container">
        <h2 className="about-title">About</h2>
        <p className="paragraph">
          Inspiration of this collection was an animation from XX century Pat &
          Mat, where each episode typically features the two characters facing
          mostly self-made problems, and trying to solve them using a range of
          possible and impossible tools and construction gadgets. Their
          solutions appear to work, before everything suddenly goes wrong,
          leading to even more problems than before. However, Pat and Mat
          invariably find a solution in the end, usually via a surprising or
          innovative method.
        </p>
      </div>

      <div id="team-container" className="container">
        <h2 className="textview-team">Team</h2>
        <div className="row">
          <div className="col-4 gio-gajishvili">
            <a
              href="https://www.instagram.com/giorgigajishvili/"
              target="_blank"
            >
              <div className="artwork-container">
                <img className="nft-artwork" src={GoldenBoy}></img>
                <span className="nft-name">Giorgi Gajishvili</span>
              </div>
            </a>
          </div>
          <div className="col-4 guram-kveniashvili">
            <a href="https://www.instagram.com/kv3no/" target="_blank">
              <div className="artwork-container">
                <img className="nft-artwork" src={SilverBoy}></img>
                <span className="nft-name">Guram Kveniashvili</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="faq-container" className="container test">
        <h2 className="faq">FAQ</h2>
        <ul className="questions">
          <li className="accordion" onClick={toggleAccordionClass}>
            Why Pat and Mat in XXI century ?
          </li>
          <div className="panel">
            According to school lunch director, Marge Kaplan, 'the children are
            making a big effort to think in a sensible way about the food they
            put on their plates. We now have about 15% less waste and we think
            this percentage will grow as more children join in the campaign.
          </div>
          <li className="accordion" onClick={toggleAccordionClass}>
            What will be utilitys ?
          </li>
          <div className="panel">
            According to school lunch director, Marge Kaplan, 'the children are
            making a big effort to think in a sensible way about the food they
            put on their plates. We now have about 15% less waste and we think
            this percentage will grow as more children join in the campaign.
          </div>
          <li className="accordion" onClick={toggleAccordionClass}>
            Who are members of team ?
          </li>
          <div className="panel">
            According to school lunch director, Marge Kaplan, 'the children are
            making a big effort to think in a sensible way about the food they
            put on their plates. We now have about 15% less waste and we think
            this percentage will grow as more children join in the campaign.
          </div>
          <li className="accordion" onClick={toggleAccordionClass}>
            What is your road map ?
          </li>
          <div className="panel">
            According to school lunch director, Marge Kaplan, 'the children are
            making a big effort to think in a sensible way about the food they
            put on their plates. We now have about 15% less waste and we think
            this percentage will grow as more children join in the campaign.
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
