import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Col from  "../../components/Col";
import Row from "../../components/Row";
import Footer from "../../components/Footer";
import "./homestyle.css";

function Home() {

    return(
        <> 
        <Navbar />      
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
                <br />
                <Col size="md-12 text">
                    <p>
                    Collaborative Software DeliveryManager/Project Lead with expertise building mature agile teams that deliver quality on-deadline products that drive 
                    corporative objectives. Facilitates continuous improvement across all levels of the organization.  Servant leader adept at creating self-directed 
                    teams and positive team cultures. 
                    Certified Scrum Master(CSM)and SAFe Advance Scrum Master(SASM)
                    </p>
                </Col>
            </Row>
            
        </Container>
            <Row className="text-center">
                    <Col size="md-12">                
                        <hr className="socialhr"/>
                        <h2 className="connect">Connect</h2>                
                    </Col>
                    
                    <Col size="md-4"></Col>
                    <Col size="md-4 social">             
                        <a href="https://www.linkedin.com/in/wendy-hintzen-999b7583/" target="_blank" rel="noreferrer" className="fa fa-linkedin"> </a>                                 
                    </Col>
                    <Col size="md-4"></Col>                
            </Row>
            <Footer />
       </> 
    );
}

export default Home;