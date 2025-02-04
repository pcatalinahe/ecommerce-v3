import React from "react";
import "../styles/Contact.css";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register, // Register the input
    handleSubmit, // Submit the form
    formState: { errors }, // Form validation errors
    reset, // Reset the form on submit
  } = useForm(); 

  const onSubmit = (data) => {
    alert("Form submitted successfully!\n" + JSON.stringify(data, null, 2));
    reset(); // Reset the form after successful submission
  };

  return (
    <div className="contact-container">
      <div className="contact-section">
        {/* <div id="hero">
          <video autoPlay muted loop>
            <source src="src/assets/hero.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className="contact-form">
          <form
            id="contactus-form"
            className="form-content"
            onSubmit={handleSubmit(onSubmit)} // Call the onSubmit function on form submission
          >
            <h1 className="form-title">Contact Us</h1>

            <div className="form-group">
              <label className="form-label">
                First Name (<span className="required">*</span>)
              </label>
              <input
                type="text"
                id="f-name"
                className="form-input"
                placeholder="First name"
                {...register("firstName", {
                  required: "First name is required.",
                })}
              />
              {errors.firstName && (
                <span className="error-message">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">
                Last Name (<span className="required">*</span>)
              </label>
              <input
                type="text"
                id="l-name"
                className="form-input"
                placeholder="Last name"
                {...register("lastName", {
                  required: "Last name is required.",
                })}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName.message}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Email (<span className="required">*</span>)
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Insert email address"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email.",
                  },
                })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Message (<span className="required">*</span>)
              </label>
              <textarea
                id="msg"
                className="form-textarea"
                placeholder="Your inquiry or comment*"
                {...register("message", { required: "Message is required." })}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>

            <button type="submit" id="send" className="submit-btn">
              Send
            </button>

            <span id="error"></span>
          </form>
        </div>

        <div className="newsletter">
          <h1 className="newsletter-title">
            💌 Sign up now and enjoy 10% off your first order!
          </h1>

          <h4 className="newsletter-subtitle">
            Your love story starts here—let Enamoré make it sparkle.
          </h4>
          <p className="newsletter-intro">Be the first to know about:</p>
          <ul className="benefits-list">
            <ol>
              Exclusive Offers: Early access to special promotions and
              discounts.
            </ol>
            <ol>
              New Arrivals: Discover our latest collections before anyone else.
            </ol>
            <ol>
              Inspiration & Tips: Jewelry care tips, styling guides, and more.
            </ol>
          </ul>

          <button className="signup-btn">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};
