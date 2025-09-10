import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VolunteerForm.css";

const VolunteerForm = () => {
  const [step, setStep] = useState(1); // Track form steps
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    reason: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <section className="volunteer-section">
      <div className="volunteer-container" data-aos="fade-up">
        <h2 className="volunteer-title">Become a Volunteer</h2>
        <p className="volunteer-subtitle">
          Answer step by step — your journey starts here ✨
        </p>

        <form
          action="https://formspree.io/f/your-form-id" // 🔥 replace with your Formspree endpoint
          method="POST"
          className="volunteer-form"
        >
          {/* STEP 1: Name */}
          {step === 1 && (
            <div className="form-step" data-aos="fade-right">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              <button type="button" className="btn-next" onClick={nextStep}>
                Next →
              </button>
            </div>
          )}

          {/* STEP 2: Date of Birth */}
          {step === 2 && (
            <div className="form-step" data-aos="fade-left">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <div className="step-buttons">
                <button type="button" onClick={prevStep}>
                  ← Back
                </button>
                <button type="button" className="btn-next" onClick={nextStep}>
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Email */}
          {step === 3 && (
            <div className="form-step" data-aos="fade-right">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <div className="step-buttons">
                <button type="button" onClick={prevStep}>
                  ← Back
                </button>
                <button type="button" className="btn-next" onClick={nextStep}>
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Reason */}
          {step === 4 && (
            <div className="form-step" data-aos="fade-left">
              <label>Why do you want to volunteer?</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us your reason..."
                required
              />
              <div className="step-buttons">
                <button type="button" onClick={prevStep}>
                  ← Back
                </button>
                <button type="submit" className="btn-submit">
                  ✅ Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
