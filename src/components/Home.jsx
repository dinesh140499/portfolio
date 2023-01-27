import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Laravel Expert.",
        "Profession Web Developer.",
        "Web Designer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="home">
        <div className="container">
          <h1 className="home-heading">Hey! I'm Easton</h1>
          <h2 className="home-desc">
            <span ref={el}></span>
          </h2>
          <div className="arrow-down">
            <a href="/#" className="arrow">
              <div className="dot"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
