import React, { Component } from "react";
import Tech from "./Tech";

class Project extends Component {
  render() {
    // console.log(this.props.project);
    const { id, name, tech, image, demo, repo } = this.props.project;
    return (
      <div className="column" key={id}>
        <div className="card">
          <article className="message is-primary">
            <div className="message-header">
              <p>{name}</p>
            </div>
            <div className="message-body">
              {tech.map((techItem, index) => (
                <Tech tech={techItem} key={index} />
              ))}
              <br />
              <br />
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src={process.env.PUBLIC_URL + image} alt={name} />
                </figure>
              </div>
              <div className="card-content">
                <a href={demo}>See It Here</a>
                <br />
                <a href={repo}>GitHub Respository</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Project;
