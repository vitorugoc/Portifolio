import {Container, Row, Col, Nav, Tab} from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import colorSharp from "../assets/img/color-sharp2.png"
import projImg from "../assets/img/image.jpg"



export const Projects = () =>{

    const projects = [
        {
            title: "Projeto 1",
            description: "Desenvolvimento...",
            imgUrl: projImg

        },
        {
            title: "Projeto 2",
            description: "Desenvolvimento...",
            imgUrl: projImg
        },
        {
            title: "Projeto 3",
            description: "Desenvolvimento...",
            imgUrl: projImg
        },
        {
            title: "Projeto 4",
            description: "Desenvolvimento...",
            imgUrl: projImg
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lacus augue. Morbi interdum, sem sit amet rhoncus sagittis, nulla massa suscipit est, facilisis condimentum purus tellus eu lectus. Duis porta facilisis tellus, vitae dictum risus venenatis vel. In sapien augue, tincidunt ac urna vel, feugiat facilisis sapien.</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Primeira Aba
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Segunda Aba
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Terceira Aba
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                   />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    
                                </Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp} alt="Sharp"/>
        </section>
    )

} 