import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import "./portfoliostyle.css";


function Portfolio() {
    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col size="lg-12">                        
                        <p id="Portfolio"> <strong>Portfolio Section of Projects I Worked on:</strong></p>                             
                        <br />
                    </Col>

                             {/* Password Generator Section */}
                    <Col size="lg-12">                                          
                        <p id="mediumblue"> <strong>Password Generator Info:</strong>
                            <strong id="antiquewhite"> Enter Name, check all boxes and click on Generate Password</strong></p>
                        <div className="password">                                     
                            <ul>                            
                                <strong id="mediumblue">Deployed:</strong> <a href="https://whintzen.github.io/HW3_Password_Generator/index.html" 
                                    id="antiquewhite" target="_blank" rel="noreferrer" alt="Deploy">GitHub Deployed Version</a>
                                    <br /> 
                                <strong id="mediumblue">Repository:</strong> <a href="https://github.com/whintzen/HW3_Password_Generator" 
                                    id="antiquewhite" target="_blank" rel="noreferrer" alt="Repository">GitHub Repository</a>                                 
                            </ul>
                        </div>                
                    </Col>
                    <br />
                    <Col size="lg-12">
                        <img src="./assets/images/Generator1.png" alt="Generator" className="generator"/>
                    </Col>
                </Row>
                   <br/> 
                            {/* Code Quiz Section */}
                <Row>
                    <Col size="lg-12">
                       <p id="mediumblue"> <strong>Code Quiz Info:</strong>
                        <strong id="antiquewhite"> Click Start and answer the questions. See your scores at 
                            the end and in local storage</strong></p>
                        <div className="code">                          
                            <ul>                            
                                <strong id="mediumblue">Deployed:</strong> <a href="https://whintzen.github.io/HW4_Code_Quizz/index.html" 
                                    id="antiquewhite" target="_blank" rel="noreferrer" alt="Deploy">GitHub Deployed Version</a>
                                <br />
                                <strong id="mediumblue">Repository:</strong> <a href="https://github.com/whintzen/HW4_Code_Quizz" 
                                    id="antiquewhite" target="_blank" rel="noreferrer" alt="Repository">GitHub Repository</a> 
                            </ul>
                        </div>
                    </Col>
                        <br />
                    <Col size="lg-12">
                        <img src="./assets/images/CodeQuiz.png" alt="CodeQuiz" className="codequiz"/>
                    </Col>
                </Row>
                    <br />

                          {/* Project One Section  */}
                <Row>
                    <Col size="lg-12">
                        <p id="mediumblue"> <strong>Project One Info:</strong>
                            <strong id="antiquewhite"> Click on Search and enter your favorite artist, see top 10 hits, 
                            any concert events; Click on hits to see lyrics and listen to songs</strong></p>
                        <div class="project">
                            <ul>                            
                                <strong id="mediumblue">Deployed:</strong> <a href="https://tmbx9482.github.io/Project1_RUTSchool/index.html" 
                                        id="antiquewhite" target="_blank" rel="noreferrer" alt="Deploy">GitHub Deployed Version</a>
                                <br />
                                <strong id="mediumblue">Repository:</strong> <a href="https://github.com/tmbx9482/Project1_RUTSchool" 
                                        id="antiquewhite" target="_blank" rel="noreferrer" alt="Repository">GitHub Repository</a>                               
                            </ul>
                        </div>
                    </Col>
                    <br />

                    <Col size="lg-12">                                        
                            <img src="./assets/images/Project1.png" alt="ProjectOne" className="project1"/>
                    </Col>
                </Row>
                    <br />
                        {/* Eat Da Burger Section  */}
                <Row>
                    <Col size="lg-12">  
                    <p id="mediumblue"><strong>Eat Da Burger Info:</strong>
                        <strong id="antiquewhite"> Enter and Submit a request for your Favourite Hamburger, and then select from the Available list,
                            the one you would like to devour by Clicking the Devour It button</strong></p>
                        <div class="project">
                            <ul>                            
                               <strong id="mediumblue">Deployed:</strong> <a href="/" 
                                    id="deploytext" target="_blank" rel="noreferrer" alt="Deploy">This is a Handlebars project, 
                                    so no HTML file to Deploy. Click on Repository Only</a>
                                <br />
                              <strong id="mediumblue">Repository:</strong> <a href="https://github.com/whintzen/Burger.git"                                 
                                    id="antiquewhite" target="_blank" rel="noreferrer" alt="Repository">GitHub Repository</a>                               
                            </ul>
                        </div>
                    </Col >
                    <br />
                    <Col size="lg-12">                                
                    <img src="./assets/images/BurgerApp_Screenshot.png" alt="BurgerApp" className="burger"/> 
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

        </div>
    );  
}

export default Portfolio;

