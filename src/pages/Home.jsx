import React from "react";
import "./Home.css"
import Hap from "../images/happy.png";
import Sad from "../images/sad.png";
import Ang from "../images/angry.png";
import Fear from "../images/fear.png";
import Neutral from "../images/neutral.png";
import Surprise from "../images/surprise.png";


export default function Home() {
  return (

    <>
    <div className="container">
      
      <h2>Welcome <img className="log1" src="https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558" alt="" /></h2>
      <p>Here You Can Find The Best Suggestion for Your Current Mood</p>
      <p>How are you feeling right now??</p>
      <div className="divs">
        <div className="div1">
            <img className="emos" src={Hap} alt="" />
            <a href="/Happy">Happy</a>
        </div>
        <div className="div2">
            <img className="emos" src={Sad} alt="" />
            <a href="/Sad">Sad</a>
        </div>
        <div className="div3">
            <img className="emos" src={Ang} alt="" />
            <a href="/Angry">Angry</a>
        </div>
        </div>
        <div className="divs">
        <div className="div4">
            <img className="emos" src={Neutral} alt="" />
            <a href="/Neutral">Neutral</a>
        </div>
        <div className="div5">
            <img className="emos" src={Fear} alt="" />
            <a href="/Fear">Fear</a>
        </div>
        <div className="div6">
            <img className="emos" src={Surprise} alt="" />
            <a href="/Surprise">Surpise</a>
            </div>
      </div>
      
    </div>
    
    </>
  );
}
