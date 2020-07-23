import React from "react";

function Portfolio() {
  return (
    <div>
      <br />
      <div className="container">
        <div className="columns">
          <div className="column">
            <article className="message is-info">
              <div className="message-header">
                <p>Portfolio</p>
              </div>
              <div className="message-body">
                <p>
                  I'm currently updating & broadening my full-stack development
                  skills. Projects like the ones below are how I'm wrapping my
                  head around some new concepts and getting practice with older
                  ones.
                  <br />
                  <br />
                  All this and more can be found on{" "}
                  <a href="https://github.com/jaredhennessy/">
                    GitHub/jaredhennessy
                  </a>
                  , and more info about the types of things that I build can be
                  found on{" "}
                  <a href="./assets/images/Hennessy.pdf" target="_blank">
                    my resume
                  </a>
                  .
                </p>
              </div>
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
          <div className="column">
            <div className="card">
              <article className="message is-primary">
                <div className="message-header">
                  <p>Get Task</p>
                </div>
                <div className="message-body">
                  <span className="tag is-info">node</span>
                  <span className="tag is-info">express</span>
                  <span className="tag is-info">handlebars</span>
                  <span className="tag is-info">materialize</span>
                  <span className="tag is-info">mysql</span>
                  <span className="tag is-info">sequelize</span>
                  <span className="tag is-info">bcrypt</span>
                  <span className="tag is-info">nodemailer</span>
                  <br />
                  <br />
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img src="./assets/images/GetTask.png" alt="GetTask" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <a href="https://calm-scrubland-27592.herokuapp.com/">
                      See It Here.
                    </a>
                    <br />
                    <a href="https://github.com/jaredhennessy/GetTask/">
                      GitHub Respository
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <article className="message is-primary">
                <div className="message-header">
                  <p>Quarentainment</p>
                </div>
                <div className="message-body">
                  <span className="tag is-info">localstorage</span>
                  <span className="tag is-info">bulma</span>
                  <span className="tag is-info">The Movie Database</span>
                  <span className="tag is-info">NYT Books Bestsellers</span>
                  <span className="tag is-info">NYT Movie Reviews</span>
                  <br />
                  <br />
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img
                        src="./assets/images/Quarentainment-ws.png"
                        alt="Quarentainment"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <a href="https://jaredhennessy.github.io/Quarentainment/">
                      See It Here
                    </a>
                    <br />
                    <a href="https://github.com/jaredhennessy/quarentainment/">
                      GitHub Respository
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="card">
              <article className="message is-primary">
                <div className="message-header">
                  <p>Burger Logger</p>
                </div>
                <div className="message-body">
                  <span className="tag is-info">node</span>
                  <span className="tag is-info">express</span>
                  <span className="tag is-info">handlebars</span>
                  <span className="tag is-info">mysql</span>
                  <br />
                  <br />
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img
                        src="./assets/images/BurgerLogger-ws.png"
                        alt="Eat-Da-Burger"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <a href="https://mysterious-savannah-22824.herokuapp.com/">
                      See It Here
                    </a>
                    <br />
                    <a href="https://github.com/jaredhennessy/BurgerLogger/">
                      GitHub Respository
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <article className="message is-primary">
                <div className="message-header">
                  <p>Weather Dashboard</p>
                </div>
                <div className="message-body">
                  <span className="tag is-info">OpenWeatherMap API</span>
                  <span className="tag is-info">bootstrap</span>
                  <span className="tag is-info">localstorage</span>
                  <br />
                  <br />
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img
                        src="./assets/images/WeatherDashboard-ws.png"
                        alt="Weather Dashboard"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <a href="https://jaredhennessy.github.io/WeatherDashboard/">
                      See It Here
                    </a>
                    <br />
                    <a href="https://github.com/jaredhennessy/WeatherDashboard/">
                      GitHub Respository
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="card">
              <article className="message is-primary">
                <div className="message-header">
                  <p>Employee Tracker</p>
                </div>
                <div className="message-body">
                  <span className="tag is-info">node</span>
                  <span className="tag is-info">inquirer</span>
                  <span className="tag is-info">console.table</span>
                  <span className="tag is-info">mysql</span>
                  <br />
                  <br />
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img
                        src="./assets/images/EmployeeTracker.gif"
                        alt="GetTask"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <a href="https://drive.google.com/file/d/1dcdm27GlA-IbqzdXGz_XfsGEQEJy9ZK8/view">
                      See It Here
                    </a>
                    <br />
                    <a href="https://github.com/jaredhennessy/EmployeeTracker/">
                      GitHub Respository
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <article className="message is-primary">
                <div className="message-header">
                  <p>Note Taker</p>
                </div>
                <div className="message-body">
                  <span className="tag is-info">node</span>
                  <span className="tag is-info">express</span>
                  <br />
                  <br />
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img
                        src="./assets/images/NoteTaker.png"
                        alt="Eat-Da-Burger"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <a href="https://infinite-peak-96985.herokuapp.com/">
                      See It Here
                    </a>
                    <br />
                    <a href="https://github.com/jaredhennessy/NoteTaker/">
                      GitHub Respository
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
