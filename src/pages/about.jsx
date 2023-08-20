import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import RenovationSection from "@components/sections/Renovation";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Global Dynamic Corp</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>Global Dynamic Corp is a company dedicated to the importation, marketing, and distribution of spare parts, lubricants, and consumables for cars and heavy machinery. Our goal is to provide high-quality products and exceptional service to customers worldwide. With an extensive network of suppliers and a solid marketing strategy, we aim to become industry leaders, meeting our customers' needs and generating sustainable and profitable growth for our shareholders.
                  Additionally, we will offer exceptional customer service, providing technical advice and customized solutions to meet our customers' specific needs.
                  </p>
                </div>
                <figure>
                  <h3>Mision</h3>
                  <p>To provide high-quality spare parts, lubricants, and consumables for cars and heavy machinery, ensuring customer satisfaction through exceptional service and global distribution.</p>
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>Our Values</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> Integrity: We conduct our business with honesty, transparency, and ethical principles.</li>
                    <li><i className="fa-solid fa-circle-dot" /> Excellence: We strive for excellence in all aspects of our operations to deliver top-notch products and services.</li>
                    <li><i className="fa-solid fa-circle-dot" /> Customer-Centric: We prioritize our customers' needs, providing personalized solutions and exceptional support</li>
                    <li><i className="fa-solid fa-circle-dot" /> Innovation: We embrace innovation and continuous improvement to stay ahead in a dynamic industry.</li>
                    <li><i className="fa-solid fa-circle-dot" /> Collaboration: We foster a collaborative and diverse work environment, valuing each team member's contributions.</li>
                  </ul>
                </div>
                <figure>
                  <h3>Vision</h3>
                  <p>To be a leading global company in the automotive and heavy machinery spare parts industry, recognized for our commitment to quality, innovation, and customer-centric approach.</p>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      {/* <CountersSection /> */}

      {/*About How It Works Start */}
      {/* <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Plan + Control</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{"position": "relative", "zIndex": "9"}}>
            <img className="w-100" src="/img/gallery-2.jpeg" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  1.
                </div>
                <h3>Phase Plan</h3>
                <p>This step connects the design process and its miles tones with construction.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Design Pull Plan</h3>
                <p>We work with the design team to establish a detailed plan for reaching our goals.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Coordinated Layout</h3>
                <p>This process creates a single point of truth: drawings all project.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Quality Control</h3>
                <p>Having geometry worked out in the Layout step, prior to construction.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About How It Works End */}

      {/*About Key Benefits Start */}
      {/* <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/service2.jpeg" alt="About key Benefits" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <h2>Key Benefits</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Labor expenses are a common target for cost reduction measures in the construction industry</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p> A good material management system includes proper communication, scheduling,  and tracking tools.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Faster supplies can be used upon delivery to a construction site, the better.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Effective material management systems not only ensure that materials are in the right place</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*About Key Benefits End */}

      {/* <TeamSlider noTop /> */}

      {/* <RenovationSection /> */}

      <TestimonialSlider />

      {/* <PartnersSlider noTop /> */}
      
    </Layouts>
  );
};
export default About;