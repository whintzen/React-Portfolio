import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./aboutstyle.css";

function About() {
    return (
        <div> 
           <Container> 
             <Row>
                <Col size="lg-12">                     
                    <h1 className="display-5">My Portfolio</h1>                        
                        <hr /> 
                </Col>   
                <Col size="lg-6">
                    <h4 class="display-5">Additional experience:</h4>
                    <p className="bio">                    
                    An analytical and meticulous IT business professional with demonstrated expertise in strategic planning,
                    business-IT strategy alignment, business transformation, systems integration, program/project management,
                    customer relationship/organizational development, strategic planning, process improvement and resource management.
                    Adept at managing complex and highly visible projects to successful completion. 
                    Driven to achieve results and exceed expectations to ensure the long-term and sustained success of an organization.
                    </p>
                    <p className="bio">
                    15 years working in Data Warehousing, with over 10 years in Project Management/Project Lead experience, along with 
                    4 years as a Scrum Master. I am currently attending Rutgers University Web Development Coding Stack.
                    </p>             
                </Col>
                
                <Col size="lg-6">
                              
                    <p id="Contact"> <strong>Contact Info:</strong></p>
                    <ul>                            
                        <li><strong>Email:</strong> <a href="/">wpah@comcast.net</a></li>
                        <li><strong>Telephone:</strong> <a href="/">973-673-2555</a></li>
                        <li><strong>Resume:</strong> <a href="./assets/resume/Wendy_Hintzen.pdf" target="_blank" rel="noreferrer" alt="wendyresume">Wendy Hintzen's Resume</a></li>
                        <li><strong>GitHub:</strong> <a href="https://github.com/whintzen" target="_blank" rel="noreferrer">github.com/whintzen</a></li> 
                    </ul>
                
                </Col>
                </Row>  
            </Container>     
        </div>
     );
}


export default About;  