import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../common/ErrorMsg";
import schema from "../common/schema";

const ContactArea = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(
      `${
        values.name +
        "\n" +
        values.email +
        "\n" +
        values.subject +
        "\n" +
        values.msg
      }`
    );
    resetForm();
  };
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        msg: "",
      },
      validationSchema: schema,
      onSubmit: handleOnSubmit,
    });

  return (
    <>
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="tp-title">Get in touch</h2>
                </div>
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Name"
                          />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Your Email"
                          />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input
                            id="subject"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Subject"
                          />
                          {touched.subject && (
                            <ErrorMsg error={errors.subject} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea
                            id="msg"
                            value={values.msg}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Write  Your Message"></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button type="submit" className="tp-solid-btn">
                            Send your message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                <div className="contact__shape">
                  <img
                    className="contact-shape-1"
                    src="assets/img/contact/contact-shape-1.png"
                    alt=""
                  />
                  <img
                    className="contact-shape-2"
                    src="assets/img/contact/contact-shape-2.png"
                    alt=""
                  />
                </div>
                <div className="contact__info-inner white-bg">
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="map" viewBox="0 0 24 24">
                        <path
                          className="st0"
                          d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"
                        />
                        <circle className="st0" cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <h4>Location</h4>
                      <p>
                        <a
                          href="https://goo.gl/maps/VFHf4FXMcZGezVPAA"
                          target="blank">
                          3rd Floor, Ali Plaza, Jinnah Avenue, Blue Area,
                          Islamabad.
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="mail" viewBox="0 0 24 24">
                        <path
                          className="st0"
                          d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"
                        />
                        <polyline className="st0" points="22,6 12,13 2,6 " />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <h4>Email us directly</h4>
                      <p>
                        <a href="mailto:info@capitalvalley.pk">
                          info@capitalvalley.pk
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="call" viewBox="0 0 24 24">
                        <path
                          className="st0"
                          d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"
                        />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <h4>Phone</h4>
                      <p>
                        <a href="tel:+923111177716">(+92) 311 1177 716 </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact__social pl-30">
                    <h4>Follow Us</h4>
                    <div className="sidebar__social">
                      <ul>
                        <li className="m-1">
                          <a
                            href="https://www.facebook.com/capitalvalleyofficial"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            href="https://www.instagram.com/capitalvalleyofficial/"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            href="https://www.tiktok.com/@capitalvalleyofficial"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-tiktok"></i>
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            href="https://twitter.com/_capitalvalley"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            href="https://www.youtube.com/@capitalvalleyofficial"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            href="https://www.linkedin.com/company/capital-valley-official/"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
