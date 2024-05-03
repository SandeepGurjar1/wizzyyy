import React from "react";
import "./happy.css";
import B1 from "../images/BB1.jpeg";
import B2 from "../images/BB2.jpg";
import B3 from "../images/BB3.jpeg";
import M1 from "../images/mm1.jpg";
import M2 from "../images/mm2.jpg";
import M3 from "../images/mm3.jpg";
import P1 from "../images/p1.jpeg";
import P2 from "../images/pp2.avif";
import P3 from "../images/pp3.jpg";


export default function Sad() {
  return (

    <div>
      <h2>Sad</h2>
      <p>“Now and then it's good to pause in our pursuit of happiness and just be happy.” </p>
      <h4>Let's Give Some Time In Reading These Beautiful Books</h4>
      <div className="books">
        <div className="book1">
            <img src={B1} alt="" />
            <a href="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?crid=S001OG1S42RB&dib=eyJ2IjoiMSJ9.xAoqssi61EZJQQ1VLeENK7oGmryZU3XiWLK3bEjSRVGFQv-Hv20EcyHBraU2jNeCfJxXng8hx_0aVP9ZxZdw5Ji2d5kv_pwmxG5wtOzqlI0smSdS6bBvC3DQjLjlYynD0sqFRkpEb6AGHriIzjrjtb6SCYEi6b_1YgD10nL3n8LGta8nmQ3xUzoxK1hhPlYOObbaN94MgTrSpD-n5qFHiR-10xQHpTXVHeZ3gyFvCL4.ilV9dvQ0TgNjyrKoMluGQv5D5l49JY-flMrqPDgYDck&dib_tag=se&keywords=atomic+habits&qid=1714542587&sprefix=ato%2Caps%2C222&sr=8-1">Atomic Habbits</a>
        </div>
        <div className="book2">
            <img src={B2} alt="" />
            <a href="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_1?crid=7BYHHL30YJZL&dib=eyJ2IjoiMSJ9.y7O8h4lj0TEhWugy0UCeAiT1p6B-hx6PlAEMlvyu8am6XosVNxOyl-wPWZy0K2v12D7GzVrvUDlFs-YljOMznJMEvOW_mYlvTHGK7yqXc0_lvLvk62gudD-WWxveRuRQab80BvXWP_cigRA_QbPkxfL0nRKLkpZVFC-KVZngEq0I8WXjffmX2gBgqDk9OGgvLUq81hQoXqA9ZRPuqJNvuTmLwmqArES1DuUDFfl_h_U.-BXIhChHmFwZv2lWotRBic4HAyvkBk995Q59qpHkZGQ&dib_tag=se&keywords=rich+dad+poor+dad+book&qid=1714542543&sprefix=rich+da%2Caps%2C222&sr=8-1">Rich Dad Poor Dad</a>
        </div>
        <div className="book3">
            <img src={B3} alt="" />
            <a href="https://www.amazon.in/Worthy-Believe-Enough-Transform-Pre-Order/dp/140197760X/ref=sr_1_3?crid=18IN2O34VTS4O&dib=eyJ2IjoiMSJ9.Ev8kTYSak-kt005RclYgzaFLcFEraEJdFiM9dzHK3PRet_3W-1hUYv_jbaxB2nwbzQghRBpJ_e65JD_74r8qVBHv54x298KYTdCmPgzCQSvN8DAhu_s1R7iIBfHer6JuqETp-ug-BS5lXv-N7Hy8GoWnp23g8i49-R559cEtru9hNQ9dEiYXwAb5-Pr0Gr2h6JewR-MlCli38HjEEreSmFd5ooUeQ56mn3s_oGz95Bg.GxBG2tGUG1bktz_SmzSCyGUQLFbuXjoNk_V6zdVmuQY&dib_tag=se&keywords=worthy&qid=1714542484&sprefix=worthy%2Caps%2C221&sr=8-3">Worthy</a>
        </div>
      </div>
      <h4>Movies You May Love to watch</h4>
      <div className="books">
        <div className="book1">
            <img src={M1} alt="" />
            <a href="https://www.imdb.com/title/tt0264464/?ref_=tt_mv_close">Catch Me If You Can</a>
        </div>
        <div className="book2">
            <img src={M2} alt="" />
            <a href="https://www.imdb.com/title/tt0323013/?ref_=fn_al_tt_1">Lakshay</a>
        </div>
        <div className="book3">
            <img src={M3} alt="" />
            <a href="https://www.imdb.com/title/tt2356180/">Bhag Milkha Bhag</a>
        </div>
      </div>
      <h4>Places You Should Visit</h4>
      <div className="books">
        <div className="book1">
            <img src={P1} alt="" />
            <a href="https://www.google.com/maps/search/nearby+temples/@31.2473557,75.6400169,12z/data=!3m1!4b1?entry=ttu">Temples</a>
        </div>
        <div className="book2">
            <img src={P2} alt="" />
            <a href="https://pairedlife.com/friendship/Feelings-to-Cherish-When-Old-Friends-Meet">Bestfriends Residence</a>
        </div>
        <div className="book3">
            <img src={P3} alt="" />
            <a href="https://kidshealth.org/en/teens/talk-depression.html">Family Residence</a>
        </div>
      </div>
    </div>
  );
}
