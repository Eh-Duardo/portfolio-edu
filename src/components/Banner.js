import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const toRotate = ["Web Developer", "Web Designer", "IT Technician"];
const period = 400;

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum((loopNum) => loopNum + 1);
            setIndex(1);
            setDelta(300);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>
                            My name is Eduardo and I aaaaaaaaaaaaaaaaaaaaam{" "}
                            <span
                                className="txt-rotate"
                                dataPeriod={period}
                                data-rotate={JSON.stringify(toRotate)}
                            >
                                <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <p>
                            I'm a 22 year old Information Systems student and
                            I've developed this portfolio to develop my skills
                            and be able to organize my projects.
                        </p>
                        <button onClick={() => console.log("connected")}>
                            My Resume
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xl={5}>
                        <img src={headerImg} alt="Astronaut Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
