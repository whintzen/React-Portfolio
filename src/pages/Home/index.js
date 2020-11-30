import React from "react";
import Container from "../../components/Container";
import Col from  "../../components/Col";
import Row from "../../components/Row";
// import Anchor from "../../components/Anchor";
import { SocialIcon } from 'react-social-icons';
import "./style.css";

function Home() {
    return(
        <>       
        <Container>
            <Row>
                <Col size="lg-12">                     
                    <h1 className="display-5">My Portfolio</h1>                        
                        <hr /> 
                </Col>                         
                <Col size="md-12">                                       
                    <img src={"./assets/images/IMG_4628.jpg"} alt="MyPicture" 
                        className="img-fluid"/>             
                </Col>
            </Row>
            
        </Container>
        <Row ClassName="text-center">
                <Col size="12">                
                    <hr className="socialimg"/>
                    <h2>Connect</h2>                
                </Col>
                <Col size="12 social padding">
                    <SocialIcon url="https://linkedin.com/in/wendy-hintzen-999b7583/" /> 
                    {/* <Anchor href={"https://www.linkedin.com/in/wendy-hintzen-999b7583/"} target="_blank" rel="noreferrer" class="fa fa-linkedin">  - LinkedIn </Anchor>                                    */}
                    {/* <a href="https://www.linkedin.com/in/wendy-hintzen-999b7583/" target="_blank" rel="noreferrer" class="fa fa-linkedin">   My LinkedIn</a>                                  */}
                </Col>
        </Row>
       </> 
    );
}

export default Home;