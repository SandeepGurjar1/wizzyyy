import React from "react";
import "./happy.css";
import B1 from "../images/bbb1.jpg";
import B2 from "../images/bbb2.jpg";
import B3 from "../images/bbb3.jpg";
import M1 from "../images/mmm2.jpg";
import M2 from "../images/movv2.jpg";
import M3 from "../images/movv3.jpeg";
import P1 from "../images/p1.jpeg";
import P2 from "../images/p2.jpeg";
import P3 from "../images/p3.jpeg";


export default function Neutral() {
  return (

    <div>
      <h2>Neutral</h2>
      <p>“When you have a dream, you’ve got to grab it and never let go.”</p>
      <h4>Let's Give Some Time To Read These Beautiful Books</h4>
      <div className="books">
        <div className="book1">
            <img src={B1} alt="" />
            <a href="https://www.amazon.in/Lectures-Colombo-Almora-Swami-Vivekananda/dp/8175050810">Lectures From Columbo</a>
        </div>
        <div className="book2">
            <img src={B2} alt="" />
            <a href="https://www.amazon.in/dp/8172343671/ref=sspa_dk_detail_0?psc=1&pd_rd_i=8172343671&pd_rd_w=tlW8d&content-id=amzn1.sym.2575ab02-73ff-40ca-8d3a-4fbe87c5a28d&pf_rd_p=2575ab02-73ff-40ca-8d3a-4fbe87c5a28d&pf_rd_r=M8K9M5EXTGMFEVGR4PR0&pd_rd_wg=qrPbO&pd_rd_r=7ae7f30b-bc67-4a59-9d06-b3690d23fd4a&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw">Geetanjali</a>
        </div>
        <div className="book3">
            <img src={B3} alt="" />
            <a href="https://www.amazon.in/Madhushala-Harivansh-Rai-Bachchan/dp/8170283442/ref=sr_1_1?crid=83ASZLJA2G20&dib=eyJ2IjoiMSJ9.0FRKuOOXt4jjwqrKFZXr5oc2pWjFW2osKJs8LLpf-2JAAp_8Ed5nG2WeOfMY2LYxIiSePQ0jYqUbMKvOJRYkOCkc45Ru17xuH9_fQ2QPPRJnfZR6SwLbZhBfV5PBHvOtPvKoY4qSbSbewRp5k-O1vhV-qrrmAcG_l67FHdVSBVR3GM4um0iA6bu-zZGTPkgFiQ2Web7bHqy3xyL5SxIxSGApJr1lPkz3TWj8ns1vwIQ.VVY67PBP1X0h7YtKRbEw-EXzTMVQL9zslYYCMrgLjx8&dib_tag=se&keywords=harivansh+rai+bachan&qid=1714661012&s=books&sprefix=harivansh+rai+bacha%2Cstripbooks%2C224&sr=1-1">Madhushala</a>
        </div>
      </div>
      <h4>Movies You May Love to watch</h4>
      <div className="books">
        <div className="book1">
            <img src={M1} alt="" />
            <a href="https://www.imdb.com/title/tt0108778/">Hum Do Hamare Do</a>
        </div>
        <div className="book2">
            <img src={M3} alt="" />
            <a href="https://www.imdb.com/title/tt9420648/">Bala</a>
        </div>
        <div className="book3">
            <img src={M2} alt="" />
            <a href="https://www.imdb.com/title/tt0419058/">Phir Hera Pheri</a>
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
            <a href="https://www.booking.com/city/in/manali.en.html?aid=1610687;label=manali-s2Bmy1rmly6SKWRAJbzQbwS380872765912:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-399839305844:lp9144063:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfpWGnRw6lOGgfEoJVv7zYo;ws=&gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rPko-IyzSy8SKQDFg0Wc4bFNa527aPcPDTgw6JF2N_3z_fddhVbjhhoC4tYQAvD_BwE">Trip to Manali</a>
        </div>
        <div className="book3">
            <img src={P3} alt="" />
            <a href="https://www.booking.com/city/ae/dubai.html?aid=1610687;label=dubai-ZzS8rHgIpLNQfqTNDuJfqAS380863659480:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-146342138470:kwd-329600110214:lp9144063:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfpWGnRw6lOGgfEoJVv7zYo;ws=&gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rKwk_day5hb4tkq2LKUhXI8w4i9G3BbD-2MoXHvSHC8IYztAo7_pdBoCUhEQAvD_BwE">Dubai</a>
        </div>
      </div>
    </div>
  );
}
