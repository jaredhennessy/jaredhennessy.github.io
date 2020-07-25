import React from "react";

function LinkedIn() {
  return (
    <div>
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="dark"
        data-vanity="jaredhennessy"
      >
        {/* <a
          class="LI-simple-link"
          href="https://www.linkedin.com/in/jaredhennessy?trk=profile-badge"
        >
          Jared Hennessy
        </a> */}
      </div>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>
    </div>
  );
}
export default LinkedIn;
