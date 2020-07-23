import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          &copy;Jared Hennessy 2020
          <br />
          You can get a hold of me via gmail (jared dot hennessy at...) and{" "}
          <a
            className="LI-simple-link"
            href="https://www.linkedin.com/in/jaredhennessy?trk=profile-badge"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>
    </footer>
  );
}

export default Footer;
