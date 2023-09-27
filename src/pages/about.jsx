import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from '../stores/use-languaje';
import {getData} from '../stores/getData';
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import {useAppData} from '../stores/use-app-data';
// import CountersSection from "@components/sections/Counters";
// import RenovationSection from "@components/sections/Renovation";

// const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
// const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  const {isSpanish} = useLanguage();

  const {about, setAbout} = useAppData((
		{about, setAbout}
	  )=>({about, setAbout}));
	
	  useEffect(() => {
		  getData('about').then((res) => {
			  setAbout(res)
		  })
	  }, [])

    const appAboutLanguage = about ? (isSpanish ? about.es : about.en) : {};

  return (
    <Layouts>
      <PageBanner pageTitle={ appAboutLanguage?.title } pageDesc={appAboutLanguage?.description} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>{appAboutLanguage?.title}</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>{appAboutLanguage?.whoWeAre?.title}</h3>
                  <p>{appAboutLanguage?.whoWeAre?.content}</p>
                </div>
                <figure>
                  <h3>{appAboutLanguage?.mision?.title}</h3>
                  <p>{appAboutLanguage?.mision?.content}</p>
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>{appAboutLanguage?.values?.title}</h3>
                  <ul>
                    {(appAboutLanguage?.values?.content?? []).map(value => (
                      <li><i className="fa-solid fa-circle-dot" />{value}</li>
                    ))}
                  </ul>
                </div>
                <figure>
                  <h3>{appAboutLanguage?.vision?.title}</h3>
                  <p>{appAboutLanguage?.vision?.content}</p>
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