import React from "react";
import Container from "../../components/Container";
import Col from  "../../components/Col";
import Row from "../../components/Row";
import "./style.css";

function Home() {
    return(
        <>       
        <Container>
            <Row>
                <Col size="lg-12">                     
                    <h1 class="display-5">My Portfolio</h1>                        
                        <hr /> 
                </Col>                         
                <Col size="md-12">                                       
                    <img src={"./assets/images/IMG_4628.jpg"} alt="MyPicture" 
                        className="img-fluid"/>             
                </Col>
            </Row>
        </Container>
       </> 
    );
}

export default Home;