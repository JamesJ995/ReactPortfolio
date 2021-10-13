import React, { Component } from 'react';
import Fade from 'react-reveal';
import Card from 'react-bootstrap/Card';


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = 'images/portfolio/' + projects.image;
      let projectURL = projects.url;
      function handleClick() {
        window.location = projectURL;
      }

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Card.Img
              onClick={handleClick}
              variant="top"
              className="box p-2"
              alt={projects.title}
              src={projectImage}
              width="500px"
              height="250px"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={projects.title}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <div style={{ textAlign: 'center' }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Work</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
