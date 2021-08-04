
import React from "react";

import { Line } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,


 

  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  tabs,
  setTabs,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";




import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {

} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import PeriodicTable from "components/PeriodicTable.js";
import data from "../../components/PeriodicTableJSON.json";
import OutlinedTimeline from "components/OutlinedTimeline";
import "assets/css/nucleo-icons.css";

import { HashLink } from 'react-router-hash-link';

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="at">
                  Anomaly <br />
                  <span className="at">Science</span>
                </h1>
                <p className="text-white mb-3">
                  Anomaly Science is dedicated to inform the public about how small miniscule changes to Scientific Elements can change everything.
                </p>
                <div className="btn-wrapper mb-3">
                  
               <HashLink smooth to='#table'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
                  <p className="category text-success d-inline">
                   Atomic Reactivity 
                  
                    <i className="tim-icons icon-minimal-right" />
                  
                  </p>
                </HashLink>
                
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/phenyl.png").default}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
          </section>
        </section>

        
        <section className="section section-lg">
        <Container id='table'> 
        <div> 
          <Row className="justify-conent-center">
            <Col lg="12">
              <PeriodicTable />
            </Col>
          </Row>
          </div>
        </Container>
            </section>
           

           


        <section className="section section-lg">
        
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center"></h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-components" />
                      </div>
                      <h4 className="info-title">Small Pieces</h4>
                      <hr className="line-primary" />
                      <p>
                        A.S will give you only small pieces of information in order for better retainments. We will give you the most important facts. 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-molecule-40" />
                      </div>
                      <h4 className="info-title">Detailed Analysis </h4>
                      <hr className="line-warning" />
                      <p>
                       A.S is committed to giving inisght and understanding about the scientific elements in laymans terms. 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-planet" />
                      </div>
                      <h4 className="info-title">Our Future</h4>
                      <hr className="line-success" />
                      <p>
                        We are currently partnering with N.A.S.A and SpaceX to move our project of understanding the elements on this planet to the elements on other planets. 
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        
        <section className="section section-lg section-safe">
        <Container> 
          <div id = "timeline" > 
          <Row className="justify-conent-center">
            <Col lg="12">
            <OutlinedTimeline />
            </Col>
          </Row>
          </div>
        </Container>
      </section>

      <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
         
          
        </section>




      <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the element{" "}
                  <span className="text-info">that sparks your interest</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
              <Container id='diatomiccoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/oxygen.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Oxygen</h4>
                        <span>Diatomic Metal</span>
                        <hr className="line-diatomic" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                      <ListGroupItem>Atomic Mass: 15.99</ListGroupItem>
                        <ListGroupItem>Boiling Point: 90.188 Fahr</ListGroupItem>
                        <ListGroupItem>Discovered By: Antoine Lavoisier</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="transparent">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Container>
             </Col>
              <Col md="4">
              <Container id='noblecoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/krypton.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Krypton</h4>
                        <span>Noble Gas</span>
                        <hr className="line-noble" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Atomic Mass: 83.7982 </ListGroupItem>
                        <ListGroupItem>Boiling Point: 119.93 Fahr </ListGroupItem>
                        <ListGroupItem>Discovered By: William Ramsay</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Container>
              </Col>
              <Col md="4">
              <Container id='alkaliccoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/lithium.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Lithium</h4>
                        <span>Alkali Metal</span>
                        <hr className="line-alkali" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                      <ListGroupItem>Atomic Mass: 6.94 </ListGroupItem>
                        <ListGroupItem>Boiling Point: 1603 Fahr </ListGroupItem>
                        <ListGroupItem>Discovered By: Johan Arfwedson</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
                </Container> 
              </Col>
            </Row>


           



            <Row>
              <Col md="4">
              <Container id='alkalineearthccoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/potassium.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Potassium</h4>
                        <span>Alkaline Earth Metal</span>
                        <hr className="line-alkalinee" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
           
                      <ListGroupItem>Atomic Mass: 39.09831 </ListGroupItem>
                        <ListGroupItem>Boiling Point: 1032 Fahr</ListGroupItem>
                        <ListGroupItem>Discovered By: Humphry Davy</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Container>
             </Col>


              <Col md="4">
              <Container id='metalloidcoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/boron.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Boron</h4>
                        <span>Metalloid</span>
                        <hr className="line-metalloid" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Atomic Mass: 10.81 </ListGroupItem>
                        <ListGroupItem>Boiling Point: 4200 Fahr </ListGroupItem>
                        <ListGroupItem>Discovered By: Joseph Louis Gay-Lussac</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Container>
              </Col>
              <Col md="4">
              <Container id='transitioncoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/titanium.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Titanium</h4>
                        <span>Transition Metal</span>
                        <hr className="line-transition" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                      <ListGroupItem>Atomic Mass: 47.8671 </ListGroupItem>
                        <ListGroupItem>Boiling Point: 3560 Fahr </ListGroupItem>
                        <ListGroupItem>Discovered By: William Gregor</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
                </Container> 
              </Col>
            </Row>



            <Row>
              <Col md="4">
              <Container id='posttransitionccoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/galluium.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Galluium</h4>
                        <span> Post-Transition Metal</span>
                        <hr className="line-posttransition" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
           
                      <ListGroupItem>Atomic Mass: 69.7231</ListGroupItem>
                        <ListGroupItem>Boiling Point: 2670 Fahr </ListGroupItem>
                        <ListGroupItem>Discovered By: Lecoq de Boisbaudran</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Container>
             </Col>


              <Col md="4">
              <Container id='phosphorouscoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/phosphorous.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Phosphorous </h4>
                        <span>Polyatomic Non-metal</span>
                        <hr className="sucess" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Atomic Mass: 12.011 </ListGroupItem>
                        <ListGroupItem>Boiling Point: 536.9 F Fahr </ListGroupItem>
                        <ListGroupItem>Discovered By: Ancient Egyptians</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Container>
              </Col>
              <Col md="4">
              <Container id='ogannassoncoin'> 
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ogannasson.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Ogannaseum</h4>
                        <span> Polyatomic Non-metal</span>
                        <hr className="line-polyatomic" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                      <ListGroupItem>Atomic Mass: 294</ListGroupItem>
                        <ListGroupItem>Boiling Point: 350 Fahr </ListGroupItem>
                        <ListGroupItem>Discovered By: J . I . N . R</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
                </Container> 
              </Col>
            </Row>



          </Container>
        </section>

      


      
      
       
        
       
      </div>
      <Footer />
    </>
     
  );
}
