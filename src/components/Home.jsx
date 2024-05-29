import React from "react";

function Home() {
  return (
    <div
      className="container-wrapper"
      style={{ width: "400px", margin: "0 auto" }}
    >
      <div className="home-wrapper">
        <div className="home-details">
          <h1>Welcome to Sweet Bliss Café</h1>
          <p>
            At Sweet Bliss Café, we strive to provide our customers with the
            most delightful treats and the warmest hospitality. Our passion for
            crafting delicious pastries and savory snacks is matched only by our
            dedication to creating a cozy and inviting atmosphere for everyone
            who walks through our doors.
          </p>
          <h2>Contact Us</h2>
          <p>Call us at 1-800-123-4567</p>
          <p>
            or email us at:{" "}
            <a href="mailto:sweetblisscafe@gmail.com">
              sweetblisscafe@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
