import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import skill1 from "../assets/img/skills-html-logo.png";
import skill2 from "../assets/img/skills-css-logo.png";
import skill3 from "../assets/img/skills-js-logo.png";
import skill4 from "../assets/img/skills-react-logo.png";
import skill5 from "../assets/img/skills-node-logo.png";
import skill6 from "../assets/img/skills-git-logo.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Linguagens</h2>
              <p>Essas são algumas das linguagens que estou aprendendo</p>
              <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} autoPlaySpeed={2500} draggable={true} swipeable={true} arrows={false} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <h5>HTML 5</h5>
                  <img src={skill1} alt="Ícone do HTML 5" />
                </div>
                <div className="item">
                  <h5>CSS 3</h5>
                  <img src={skill2} alt="Ícone do CSS 3" />
                </div>
                <div className="item">
                  <h5>JavaScript</h5>
                  <img src={skill3} alt="Ícone do JavaScript" />
                </div>
                <div className="item">
                  <h5>React</h5>
                  <img src={skill4} alt="Ícone do React" />
                </div>
                <div className="item">
                  <h5>Node</h5>
                  <img src={skill5} alt="Ícone do Node" />
                </div>
                <div className="item">
                  <h5>Git</h5>
                  <img src={skill6} alt="Ícone do Git" />
                </div>
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}