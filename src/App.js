import personas from "./assets/personas.jpg";
import iterativeDesign from "./assets/iterative-design.jpg";
import redesign from "./assets/redesign.jpg";
import development from "./assets/development.jpg";
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="splash-page">
        <Navbar className="navbar">
          <Navbar.Brand className="brand" href="#home">
            <img className="logo" src={logo}></img>
            StonedStallion420
          </Navbar.Brand>
        </Navbar>
        <div className="intro">
          <span>Hello! I'm </span>
          <span className="name">StonedStallion420</span>
          <p>
            a student at Brown University taking UIUX. Prior to this class, I
            had no front-end experience. Below is a progression of the work I
            made in chronological order.
          </p>
        </div>
        <img className="arrow" src={arrow}></img>
      </div>
      <main>
        <h1>My Projects Timeline</h1>
        <div className="project-container">
          <div className="timeline-container">
            <h2>Sept. 20</h2>
            <div className="timeline"></div>
          </div>
          <div className="project">
            <h2>Personas and Storyboarding</h2>
            <img src={personas}></img>
            <p className="project-description">
              I observed people interacting with a Nespresso coffee machine,
              interviewed them about their experiences, created two personas
              based on my observations and their responses, then illustrated a
              storyboard for one of my personas.
            </p>
            <Button
              variant="outline-success"
              href="https://stonedstallion420.github.io/personas/"
            >
              Take a look!
            </Button>
          </div>
        </div>
        <div className="project-container">
          <div className="timeline-container">
            <h2>Oct. 4</h2>
            <div className="timeline"></div>
          </div>
          <div className="project">
            <h2>Responsive Redesign</h2>
            <img src={redesign}></img>
            <p className="project-description">
              The goal of this assignment was to practice the workflow of
              redesigning a website. I identified flaws in an existing
              interface, created low-fidelity and high-fidelity prototypes for
              various screen sizes, then built a responsive website based on
              those prototypes.
            </p>
            <Button
              className="project-link"
              variant="outline-success"
              href="https://stonedstallion420.github.io/responsive-redesign/"
            >
              Take a look!
            </Button>
          </div>
        </div>
        <div className="project-container">
          <div className="timeline-container">
            <h2>Oct. 25</h2>
            <div className="timeline"></div>
          </div>
          <div className="project">
            <h2>Iterative Design and Evaluation</h2>
            <img src={iterativeDesign}></img>
            <p className="project-description">
              This project was for CSCI1300: User Interface and User Interaction
              focusing on going through the full process of mocking up a
              solution to a startup's concept. We iteratively designed an
              interactive interface for an emerging startup: Finnt. There are
              four parts to the iterative design process flow: (1) sketching
              ideas of the interface, (2) creating an interactive, high-fidelity
              prototype, (3) conducting user testing on a final, revised
              prototype, and (4) contacting the start-up.
            </p>
            <Button
              variant="outline-success"
              href="https://groovylynx123.github.io/iterative-design-project/"
            >
              Take a look!
            </Button>
          </div>
        </div>
        <div className="project-container">
          <div className="timeline-container">
            <h2>Nov. 8</h2>
            <div className="timeline"></div>
          </div>
          <div className="project">
            <h2>Development</h2>
            <img src={development}></img>
            <p className="project-description">Project description</p>
            <Button variant="outline-success" href="#">
              Take a look!
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
