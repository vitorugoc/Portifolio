import {Container, Row, Col} from "react-bootstrap"
import {useState, useEffect} from "react"
import headerImg from '../assets/img/header-image.png'


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Desenvolvedor Front-End", "React"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        
        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }


    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md ={6} xl = {7}>
                        <span className="tagline">Bem vindo ao meu Portifólio!</span>
                        <h1>{`Olá, eu sou o Vitor `}<br></br><span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lacus augue. Morbi interdum, sem sit amet rhoncus sagittis, nulla massa suscipit est, facilisis condimentum purus tellus eu lectus. Duis porta facilisis tellus, vitae dictum risus venenatis vel. In sapien augue, tincidunt ac urna vel, feugiat facilisis sapien. Phasellus quis urna quis ligula euismod mattis eu volutpat lorem.</p>
                    </Col>
                    <Col xs={12} md ={6} xl = {5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}