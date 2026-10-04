import { Link } from "react-router-dom";
import "./Hero.scss";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Pro.Beyond</p>
          <h1 className="hero__title">
            IPhone 18 <span>Pro</span>
          </h1>
          <p className="hero__text"> Більше можливостей у кожному дотику.</p>
          <Link to="/product/7" className="hero__button">
            Купуйте зараз
          </Link>
        </div>

        <div className="hero__media">
          <img src={heroImage} alt="Iphone 18 pro" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
