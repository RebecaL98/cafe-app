import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Information</h4>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Find Us</h4>
        <p>11 Rose Street,</p>
        <p>Edinburgh, EH8 6KU</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li>
            {" "}
            <a href="https://facebook.com">Facebook</a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            {" "}
            <a href="https://twitter.com">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
