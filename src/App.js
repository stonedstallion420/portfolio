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
          <Navbar.Brand className="brand" href="#">
            <img className="logo" src={logo}></img>
            StonedStallion420
          </Navbar.Brand>
        </Navbar>
        <div className="intro-container">
          <div className="intro">
            <span>Hello! I'm </span>
            <span className="name">StonedStallion420</span>
            <p>
              a student at Brown University taking UIUX. Prior to this class, I
              had no front-end experience. Below is a progression of the work I
              made in chronological order.
            </p>
          </div>
          <a className="arrow" href="#main">
            <img src={arrow}></img>
          </a>
        </div>
      </div>
      <main id="main">
        <h1>My Projects Timeline</h1>
        <div className="project-container">
          <div className="timeline-container">
            <h2>Sept. 20</h2>
            <div className="timeline"></div>
          </div>
          <div className="project">
            <h2>Personas & Storyboarding</h2>
            <img src={personas}></img>
            <p className="project-description">
              For my first project, I observed real users interacting with an
              interface, interviewed these people about their experiences,
              created personas based on these users, and illustrated a
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
              For my next assignment, I practiced the workflow of redesigning a
              website. I identified flaws in an existing interface, created
              low-fidelity and high-fidelity prototypes for various screen
              sizes, then built a responsive website based on those prototypes.
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
            <h2>Iterative Design & Evaluation</h2>
            <img src={iterativeDesign}></img>
            <p className="project-description">
              By mid-semester, I became more comfortable with web development
              and learned several principles of UX design. I had an opportunity
              to apply what I learned in the real-world in this project, where I
              worked with a group to design an interactive interface for an
              emerging startup.
            </p>
            <Button
              variant="outline-success"
              href="https://stonedstallion420.github.io/iterative-design/"
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
            <p className="project-description">
              Prior to this project, all of the interfaces I coded were not
              interactive. For my final project, I learned React to develop an
              interactive interface.
            </p>
            <Button
              variant="outline-success"
              href="https://stonedstallion420.github.io/development-page/"
            >
              Take a look!
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
