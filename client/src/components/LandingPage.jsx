import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

// Example path (adjust as needed)

function LandingPage() {
  return (
    <div>
      <header>
        <nav className={styles.container}>
          <div className="flex items-center justify-start ">
            <img src="/logo.png" alt="CodeFusion Logo" className="size-24" />
            <span className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
              CodeFusion
            </span>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <Link to={"/login"}>
            <button className={styles.loginBtn}>Create Room</button>
          </Link>
        </nav>
      </header>

      <main
        className={`${styles.hero} ${styles.container} scroll-smooth`}
        id="home"
      >
        <div className={styles.heroContent}>
          <h1>Collaborate, Code, and Conquer.</h1>
          <h2>The ultimate code editor for developers and teams.</h2>
          <p>
            CodeFusion provides real-time collaboration, syntax highlighting,
            and a seamless coding experience. Build better code together.
          </p>
          <div className={styles.languageLogos}>
            <img src="/logos/javascript.png" alt="JavaScript" />
            <img src="/logos/python.png" alt="Python" />
            <img src="/logos/java.png" alt="Java" />
            <img src="/logos/cpp.png" alt="C++" />
            <img src="/logos/html.png" alt="HTML" />
          </div>
        </div>
      </main>

      <section
        id="features"
        className={`${styles.features} ${styles.container} scroll-smooth`}
      >
        <h1>Features</h1>
        <div className={styles.featuresList}>
          <div>
            <h2>Real-Time Collaboration</h2>
            <p>
              Edit code simultaneously with your team and see updates in
              real-time.
            </p>
          </div>
          <div>
            <h2>Syntax Highlighting</h2>
            <p>
              Supports multiple programming languages for a smoother coding
              experience.
            </p>
          </div>
          <div>
            <h2>Customizable Themes</h2>
            <p>
              Switch between light and dark themes to suit your preferences.
            </p>
          </div>
          <div>
            <h2>Session Persistence</h2>
            <p>Rejoin your coding sessions anytime without losing progress.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className={`${styles.contactUs} ${styles.container} scroll-smooth`}
      >
        <h1>Contact Us</h1>
        <div className={styles.contactInfo}>
          <div>
            <h2>Email</h2>
            <p>
              If you have any questions or need assistance, feel free to email
              us at:
            </p>
            <p>
              <a href="mailto:support@codefusion.com">support@codefusion.com</a>
            </p>
          </div>
          <div>
            <h2>Phone</h2>
            <p>We're available Monday to Friday, 9 AM - 5 PM:</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <form>
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <section className={`${styles.footer} ${styles.container}`}>
        <div className={styles.footerContent}>
          <div>
            <h2>About Us</h2>
            <p>
              Learn more about CodeFusion and how we are revolutionizing
              collaborative coding.
            </p>
          </div>
          <div>
            <h2>Privacy Policy</h2>
            <p>Read about how we handle your data and privacy.</p>
          </div>
          <div>
            <h2>Terms of Service</h2>
            <p>Understand the terms and conditions of using our platform.</p>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <h2>Follow Us</h2>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logos/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logos/twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logos/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
