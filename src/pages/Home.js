import React from "react";

function Home() {
  return (
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child is-3 box">
              <img
                id="myFace"
                alt="My Face"
                src="./assets/images/20190718.png"
              />
            </div>

            <article className="message is-info is-9">
              <div className="message-header">
                <p>About Me</p>
                {/* <button className="delete" aria-label="delete"></button>  */}
              </div>
              <div className="message-body">
                <p>
                  <i className="fas fa-rocket"></i>
                  <span id="yearCalc">14</span>-year Seattleite, native
                  Houstonian-turned-PNW cliche, pub trivia participant, one-time
                  marathon completer, and acclaimed texter. <br />
                  <br />
                  Since Fall 2016, I've worked at an autoimmune disease research
                  program, building tools to facilitate the operation of
                  clinical trials and analysis of results.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
