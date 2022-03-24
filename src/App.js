import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Discord from "./discord.svg";
import Instagram from "./instagram.svg";
import Twitter from "./twitter.svg";
import Logo from "./pmlogo.svg";
import Zuko from "./zuko.svg";

// accordeon

function App() {
  const toggleAccordionClass = (event) => {
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("show");
  };

  return (
    <div className="main-container">
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between h-100 coordinate">
          <div className>
            <img className="pmlogo" src={Logo}></img>
          </div>
          <div>
            <a href="#about-container" className="menu-link">
              About
            </a>
            <a href="#team-container" className="menu-link">
              Team
            </a>
            <a href="#faq-container" className="menu-link">
              FAQ
            </a>
          </div>
          <a href="https://opensea.io/collection/patandmat" target="_blank">
            <button className="opensea-button">Opensea</button>
          </a>
        </div>
      </header>
      <section className="container d-flex flex-1">
        <div className="left-section">
          <h1>
            Pat and Mat in XXI century <mark>NFT</mark> collection
          </h1>
          <p className="slogan">New Project with big future !</p>
          <div className="button-container">
            <a href="https://opensea.io/collection/patandmat" target="_blank">
              <button className="buy">Buy</button>
            </a>
          </div>
          <div className="social-media-container mt-5">
            <a href="https://www.instagram.com/patandmatnft/" target="_blank">
              <img className="social-logo" src={Instagram}></img>
            </a>
            <a href="https://twitter.com/PatandMatNFT" target="_blank">
              <img className="social-logo" src={Twitter}></img>
            </a>
            <a href="https://discord.gg/qfruAZDA" target="_blank">
              <img className="social-logo" src={Discord}></img>
            </a>
          </div>
        </div>
        <div className="right-section">
          <h1>aq iqneba galerea</h1>
        </div>
      </section>
      <div className="container">
        <h2 className="textview-artworks">Artwork of the week</h2>
        <div className="row artworks-wrapper">
          <div className=" col-4 ">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Mat - Zuko</spam>
            </div>
          </div>
          <div className=" col-4 ">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Mat - Zuko</spam>
            </div>
          </div>
          <div className=" col-4 ">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Mat - Zuko</spam>
            </div>
          </div>
          <div className=" col-4 ">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Mat - Zuko</spam>
            </div>
          </div>
          <div className=" col-4 ">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Mat - Zuko</spam>
            </div>
          </div>
          <div className=" col-4 ">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Mat - Zuko</spam>
            </div>
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
          <div className=" col-4 gio-gajishvili">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Giorgi Gajishvili</spam>
            </div>
          </div>
          <div className=" col-4 guram-kveniashvili">
            <div className="artwork-container">
              <img className="nft-artwork" src={Zuko}></img>
              <spam className="nft-name">Guram Kveniashvili</spam>
            </div>
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
