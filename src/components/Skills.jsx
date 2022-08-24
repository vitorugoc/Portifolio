import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from "react-bootstrap"
import reactIcon from "../assets/img/React-icon.svg.png"
import scrumIcon from "../assets/img/Scrum-icon.png"
import bootstIcon from "../assets/img/bootstrap-logo.png"
import javaScriptIcon from "../assets/img/logo-javascript.png"



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lacus augue. Morbi interdum, sem sit amet rhoncus sagittis, nulla massa suscipit est, facilisis condimentum purus tellus eu lectus. Duis porta facilisis tellus, vitae dictum risus venenatis vel. In sapien augue, tincidunt ac urna vel, feugiat facilisis sapien. Phasellus quis urna quis ligula euismod mattis eu volutpat lorem.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item"> 
                                    <img src={javaScriptIcon} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item"> 
                                    <img src={reactIcon} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item"> 
                                    <img src={bootstIcon} alt="Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item"> 
                                    <img src={scrumIcon} alt="Image" />
                                    <h5>Scrum</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )


}