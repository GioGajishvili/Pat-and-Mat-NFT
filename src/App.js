import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Discord from "./discord.svg";
import Instagram from "./instagram.svg";
import Twitter from "./twitter.svg";
import Logo from "./pmlogo.svg";
import Zuko from "./zuko.svg";

function App() {
  return (
    <div className="main-container">
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between h-100 coordinate">
          <div className>
            <img className="pmlogo" src={Logo}></img>
          </div>
          <div>
            <a className="menu-link">About</a>
            <a className="menu-link">Team</a>
            <a className="menu-link">FAQ</a>
          </div>
          <button className="opensea-button">Opensea</button>
        </div>
      </header>
      <section className="container d-flex flex-1">
        <div className="left-section">
          <h1>
            Pat and Mat in XXI century <mark>NFT</mark> collection
          </h1>
          <p className="slogan">New Project with big future!</p>
          <div className="button-container">
            <button className="explore-now">explore now</button>
            <button className="buy">buy</button>
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
      <div className="container">
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

      <div className="container">
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

      <div className="container test">
        <h2 className="faq">FAQ</h2>
        <ul className="questions">
          <li>Why Pat and Mat in XXI century?</li>
          <li>What will be utilitys?</li>
          <li>Who are members of team?</li>
          <li>What is your road map?</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
