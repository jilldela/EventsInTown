import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ul className="footer">
        <li>
          <a href="mailto:jilldelosangeles@gmail.com">
            <i className="fa fa-envelope footer-icon" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jilldelosangeles/">
            <img
              src="http://res.cloudinary.com/db08acmvn/image/upload/v1495424512/Logo-White-128px-R_a2tmgd.png"
              alt="linkedin icon"
              className="footer-icon"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/jilldela/EventsInTown">
            <img
              src="http://res.cloudinary.com/db08acmvn/image/upload/v1495423635/GitHub-Mark-Light-64px_kproxj.png"
              alt="Github icon"
              className="footer-icon" />
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;
