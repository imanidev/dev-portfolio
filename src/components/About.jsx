import React from "react";

function About() {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section>
          <h2>Our Story</h2>
          <p>
            My Site was founded in 2010 with the goal of providing high-quality
            products and services to our customers. Over the years, we have
            grown into a leading company in our industry, thanks to our
            dedicated team and commitment to excellence.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to continuously innovate and deliver exceptional
            value to our customers. We strive to build long-lasting
            relationships based on trust, integrity, and outstanding customer
            service.
          </p>
        </section>
        <section>
          <h2>Our Team</h2>
          <ul>
            <li>
              <h3>John Doe</h3>
              <p>CEO and Co-Founder</p>
            </li>
            <li>
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default About;
