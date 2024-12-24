import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="container">
    <header>
        <nav className={styles.container}>
          <div className="flex items-center justify-start ">
            <img src="/logo.png" alt="CodeFusion Logo" className="size-8" />
            <span className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
              CodeFusion
            </span>
          </div>
          <ul>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="/guide">Guide</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          <Link to={"/login"}>
            <button className={styles.loginBtn}>Login / Register</button>
          </Link>
        </nav>
      </header>
      <section className="hero min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
  <div className="max-w-4xl text-center">
    <h1 className="text-5xl font-bold mb-6 text-blue-400">Follow these steps to get started:</h1>

    <ol className="list-decimal list-inside text-lg text-gray-400 space-y-4 text-left mx-auto">
      <li>
        <strong className="text-blue-300">Login/Register:</strong> Use the Login button at the top-right corner to access your account or create a new one.
      </li>
      <li>
        <strong className="text-blue-300">Dashboard:</strong> After logging in, you'll be redirected to your dashboard.
      </li>
      <li>
        <strong className="text-blue-300">Create/Join Room:</strong> Click the "Create / Join" button on the dashboard.
      </li>
      <li>
        <strong className="text-blue-300">Enter Room Details:</strong> Fill in the required details to join or create a room.
      </li>
      <li>
        <strong className="text-blue-300">Share Room ID:</strong> Copy the room ID from the collaboration interface and share it with participants.
      </li>
      <li>
        <strong className="text-blue-300">Happy Coding:</strong> Start coding collaboratively with your team!
      </li>
    </ol>
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
};

export default Guide;