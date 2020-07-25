import React, { Component } from "react";
import LinkedIn from "../components/LinkedIn";
import Project from "../components/Project";

class Portfolio extends Component {
  render() {
    if (this.props.loaded) {
      const portfolio = this.props.portfolio;
      // console.log(portfolio);

      return (
        <div>
          <br />
          <div className="container">
            <div className="columns">
              <div className="column is-four-fifths">
                <article className="message is-info">
                  <div className="message-header">
                    <p>Portfolio</p>
                  </div>
                  <div className="message-body">
                    <p>
                      I'm currently updating & broadening my full-stack
                      development skills. Projects like the ones below are how
                      I'm wrapping my head around some new concepts and getting
                      practice with older ones.
                      <br />
                      <br />
                      All this and more can be found on{" "}
                      <a href="https://github.com/jaredhennessy/">
                        GitHub/jaredhennessy
                      </a>
                      , and more info about the types of things that I build can
                      be found on{" "}
                      <a href="/assets/images/Hennessy.pdf" target="_blank">
                        my resume
                      </a>
                      .
                    </p>
                  </div>
                </article>
              </div>
              <div className="column is-one-fifth">
                <article className="media">
                  <LinkedIn />
                </article>
              </div>
              {/*<div className="column">
            <article className="message is-info">
              <div className="message-header">
                <p>Contact Me</p>
              </div>
              <div className="message-body">
                <article className="media">
                   <div className="media-left">
                    <div
                      className="LI-profile-badge"
                      data-version="v1"
                      data-size="medium"
                      data-locale="en_US"
                      data-type="horizontal"
                      data-theme="light"
                      data-vanity="jaredhennessy"
                    >
                      <a
                        className="LI-simple-link"
                        href="https://www.linkedin.com/in/jaredhennessy?trk=profile-badge"
                      >
                        Jared Hennessy
                      </a>
                    </div>
                  </div> 
                  <div className="media-content">
                    <div className="content">
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </div>*/}
            </div>
            <div className="columns">
              <Project project={portfolio[0]} />
              <Project project={portfolio[1]} />
            </div>
            <div className="columns">
              <Project project={portfolio[2]} />
              <Project project={portfolio[3]} />
            </div>
            <div className="columns">
              <Project project={portfolio[4]} />
              <Project project={portfolio[5]} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Portfolio;
