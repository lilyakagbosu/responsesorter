import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './images/response-sorter-logo.png';
import screenshot from './images/response-sorter-screenshot.png';
import featuresImage from './images/features.png';
import testimonialsImage from './images/testimonials.png';
import pricingImage from './images/pricing.png';
import faqImage from './images/faq.png';
import contactImage from './images/contact.png';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-navbar">
          <ul className="App-nav-links">
            <li className="App-nav-link">
              <a href="#features">Features</a>
            </li>
            <li className="App-nav-link">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="App-nav-link">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="App-nav-link">
              <a href="#faq">FAQ</a>
            </li>
            <li className="App-nav-link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="Response Sorter Logo" className="logo" />
          </div>
          <div className="header-content">
            <h1 className="title">Organize Your Job Application Responses</h1>
            <p className="description">
              Tired of sorting through hundreds of job application responses? Response Sorter is here to help! Our platform empowers you to efficiently categorize and manage responses, ensuring you never miss out on potential opportunities.
            </p>
            <div className="header-buttons">
              <a href="#get-started" className="App-button">Get Started</a>
              <a href="#sign-in" className="App-button">Sign In</a>
            </div>
          </div>
        </header>

        <section className="App-section" id="features">
          <h2>Features</h2>
          <ul className="App-features">
            <li>Efficient response categorization</li>
            <li>Insights dashboard for application analysis</li>
            <li>Automatic organization of emails</li>
          </ul>
          <img src={featuresImage} alt="Features" className="section-image" />
        </section>

        <section className="App-section" id="testimonials">
          <h2>Testimonials</h2>
          <div className="App-testimonial">
            <blockquote>
              "Response Sorter saved me hours of manual work. It's a game changer!"
            </blockquote>
            <p>- Jane Doe, Job Seeker</p>
          </div>
          <div className="App-testimonial">
            <blockquote>
              "I'm impressed by how organized my application process has become with Response Sorter."
            </blockquote>
            <p>- John Smith, Career Changer</p>
          </div>
          <img src={testimonialsImage} alt="Testimonials" className="section-image" />
        </section>

        <section className="App-section" id="pricing">
          <h2>Pricing</h2>
          <div className="App-pricing-tier">
            <h3>Free</h3>
            <p>Basic features included</p>
          </div>
          <div className="App-pricing-tier">
            <h3>Pro</h3>
            <p>Advanced features</p>
            <p>Price: $9.99/month</p>
          </div>
          <img src={pricingImage} alt="Pricing" className="section-image" />
        </section>

        <section className="App-section" id="faq">
          <h2>FAQ</h2>
          <div className="App-faq-question">
            <h3>How does Response Sorter work?</h3>
            <p>Response Sorter automatically categorizes your job application emails and provides an insights dashboard to track your progress.</p>
          </div>
          <div className="App-faq-question">
            <h3>Is my data secure?</h3>
            <p>Yes, we prioritize the security of your data and use industry-standard encryption methods.</p>
          </div>
          <img src={faqImage} alt="FAQ" className="section-image" />
        </section>

        <section className="App-section" id="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out to us at support@responsesorter.com.</p>
          <img src={contactImage} alt="Contact Us" className="section-image" />
        </section>

        <footer className="App-footer">
          <p>&#169; 2023 Response Sorter. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
