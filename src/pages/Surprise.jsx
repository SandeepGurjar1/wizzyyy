import React from "react";
import "./happy.css";
import B1 from "../images/bhagwat.jpeg";
import B2 from "../images/ramayan.jpeg";
import B3 from "../images/help.jpeg";
import M1 from "../images/mov3.jpg";
import M2 from "../images/movv2.jpg";
import M3 from "../images/movv3.jpeg";
import P1 from "../images/p1.jpeg";
import P2 from "../images/p2.jpeg";
import P3 from "../images/p3.jpeg";


export default function Surprise() {
  return (

    <div>
      <h2>Surprise</h2>
      <p>“I don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.”</p>
      <h4>Let's Give Some Time To Read These Beautiful Books</h4>
      <div className="books">
        <div className="book1">
            <img src={B1} alt="" />
            <a href="https://www.amazon.in/Bhagavad-Gita-Original-English-As/dp/B07MDTX8BR/ref=sr_1_4?adgrpid=133847502613&dib=eyJ2IjoiMSJ9.j3cyLvfX96y2_lBlBIMicUwR5MEp293hROvzVl3weXBvOXdUSwvzNJBL4CXe997ephbKG9_MLlJpcos1YRYdGaG7jLF0-S0UnnymCpsETN3DGt2fbZL2s-tJeoBB3gu3KdPcqTtR0gZ-2PIy6EPTCGxuVzQxDNJMXOwI4u5Dt6YCao9GFNwsW_GHfUSlApeCnJhuOjkWSmz3xndtp8tKURNpKokg-w6GmwEei9c8-Lw.exh0xD6e7h5dPlFrJ0g6dlr3X-G4QbZUdg5qPq6sKRQ&dib_tag=se&ext_vrnc=hi&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rMUDGL0zx1Uu_22kPt-pts8W6im51EcUDT_j9Wo1_zPGa056QyJmdBoCMRwQAvD_BwE&hvadid=586135134197&hvdev=c&hvlocphy=9144063&hvnetw=g&hvqmt=e&hvrand=16211780604850237604&hvtargid=kwd-885671684871&hydadcr=9538_1953254&keywords=bhagwat+geeta+buy&qid=1714540807&sr=8-4">Bhagwat Geeta</a>
        </div>
        <div className="book2">
            <img src={B2} alt="" />
            <a href="https://www.amazon.in/gorakhpur-ramcharitmanas-Tulsidas-Ramcharitmanas-Hardcover/dp/B09BD6P7M3/ref=sr_1_3?crid=1BTUUKN8LE2H7&dib=eyJ2IjoiMSJ9.EemMlA9XRfZ3qZW6m8UqZyJ9qhFem_API9ZtAL0Nn60Ip0I4TqJCSAjy1JQQE03F5F6VR7lHbFNjCao2gRpPJRJtAVI1eGxM5J-R02QynGL_JTA1-94v4T0EcWuM1EQkqHKD6oGcaUGLIJCSWUX6CdpsPifKIZF5-b_ULi5eT2vkT7577HeVK3WZ-UIxGWZpMD5WpFR_2hv2PzfMTPk6mB7Skbjcc8aOosBH-zDV8cs.KgREliSMGTzykBp4cviZncCFaFLBiMfjX8SMiKYmJD8&dib_tag=se&keywords=ramayan&qid=1714540858&sprefix=ramayan%2Caps%2C214&sr=8-3">Ramayan</a>
        </div>
        <div className="book3">
            <img src={B3} alt="" />
            <a href="https://www.amazon.in/Helping-Others-Succeed-people-others-ebook/dp/B085GLH251/ref=sr_1_1?crid=3R1FOLBLJVIKO&dib=eyJ2IjoiMSJ9.spOqp8pp4-h-ogB3YaarBWCT1gWvrk5FEX9Efz3GR8KMwEMaskZ4tDXh1pYaryxg4j6wU8K2AgmzmsGWwVbm6selLWFRQK2bgcpODDAZXSsM2ISbXNP6wdw6DRIDdGUB26uMUnx2U6adKrYcRnwKoQ4KHJKpugUnK0SqEON8d-kqgt4HDzqzlqDO-Oytx5gjbedK4TbehOQ-2ML-mmBRPqk4DYIqL11YClqPjB5ihYQ.zNZgbUOrHlfDt_l7eVcU51wEyvNwwCuFxg0uiIFjYHM&dib_tag=se&keywords=Helping+Others+Succeed&qid=1714540919&sprefix=helping+others+succeed%2Caps%2C255&sr=8-1">Helping Others Succeed</a>
        </div>
      </div>
      <h4>Movies You May Love to watch</h4>
      <div className="books">
        <div className="book1">
            <img src={M1} alt="" />
            <a href="https://www.imdb.com/title/tt0108778/">Friends</a>
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
