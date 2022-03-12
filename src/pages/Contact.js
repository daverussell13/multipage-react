import { useEffect } from "react";

const Contact = () => {
  useEffect(() => (document.title = "Contact"), []);
  return (
    <section className="section">
      <h1 className="section-title">Contact page</h1>
      <p className="section-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
        delectus:
      </p>
      <ul>
        <li>WA: 01239123</li>
        <li>Email: lorem10@gmail.com</li>
      </ul>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit:
      </p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
        <li>
          <a href="https://instagram.com">Instagram</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
