import React from 'react'
import './ContactDesign.scss'

function Contact() {
    return (
        <div>Contact
            <section className="contact-section">
                <div className="container">
                    {/* <ToastContainer position="top-center" /> */}
                    {/* <div className="row justify-content-center"> */}
                    {/* <div className="wrapper"> */}
                    <div className="row ">
                        <div className="col-md-6 first-box">
                            <div className="contact-wrap w-100 p-lg-5 p-4">
                                <h3 className="mb-4 f-heading">Send us a message</h3>
                                <form
                                    action='https://formspree.io/f/xvoylbdp'
                                    method='POST'
                                    id="contactForm"
                                    className="contactForm"
                                //   onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Name"
                                                //   onChange={handleInputChange}
                                                // value={name}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Email"
                                                //   onChange={handleInputChange}
                                                // value={email}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    // type="text"
                                                    className="form-control"
                                                    name="Mobile no."
                                                    placeholder="Mobile no."
                                                //   onChange={handleInputChange}
                                                // value={subject}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    name="message"
                                                    placeholder="Message"
                                                    cols="30"
                                                    rows="6"
                                                //   onChange={handleInputChange}
                                                // value={message}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="submit"
                                                    value="Send Message"
                                                    className="btn btn-primary submit-button smtbtn"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch second-box">
                            <div className="info-wrap w-100 p-lg-5 p-4 imgss">
                                <h3>Contact us</h3>
                                <p className="mb-4">
                                    some info
                                </p>
                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Address:</span> dj scamvi
                                        </p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Phone:</span>
                                            <a href="tel://123456789">+12345678</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Email:</span>
                                            <a href="mailto:info@yoursite.com">
                                                synapse@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-globe"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Website:</span>
                                            {/* <a href="#">yoursite.com</a> */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Contact