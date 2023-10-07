import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ImageView from "@components/ImageView";
import Accordion from 'react-bootstrap/Accordion';
import { useLanguage } from "../../stores/use-languaje";
import {getData, getPaths,getServiceData } from '../../stores/getData';

const ServiceDetail = ( { postData } ) => {
  const {isSpanish} = useLanguage();
  const service = isSpanish ? postData.es : postData.en;

  return (
    <Layouts>
      <PageBanner pageTitle={service.previewDetails.title} pageDesc={service.previewDetails.pageDescription} />

      {/* Service-Detail-First Start */}
      <section className="gap about-first service-detail-first detail-page">
        <div className="container">
          
          {typeof service.fullDetails.description0 != "undefined" &&
            <>
              {service.fullDetails.description0.enabled == 1 &&
              <div className="row">
                <div className="col-lg-6">
                  <div className="who-we-are">
                    <div dangerouslySetInnerHTML={{__html : service.fullDetails.description0.text1}} />
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="who-we-are">
                    <div dangerouslySetInnerHTML={{__html : service.fullDetails.description0.text2}} />
                  </div>
                </div>
              </div>
              }
            </>
          }

          {typeof service.fullDetails.gallery != "undefined" &&
            <>
              {service.fullDetails.gallery.enabled == 1 &&
              <div className="row s-d-gallery">
                {service.fullDetails.gallery.items.map((item, key) => (
                <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-3 col-md-6 col-sm-12"}>
                  <figure>
                    <a data-fancybox="gallery" href={item.image}>
                      <img className="img-fluid w-100" src={item.image} alt={item.alt} />
                    </a>
                  </figure>
                </div>
                ))}
              </div>
              }
              <ImageView />
            </>
          }
          
          {service.fullDetails.contentHtml != "" &&
          <div className="row">
            <div className="col-lg-12">
              <div dangerouslySetInnerHTML={{__html : service.fullDetails.contentHtml}} />
            </div>
          </div>
          }
          
          {typeof service.fullDetails.checklist != "undefined" &&
            <>
              {service.fullDetails.checklist.enabled == 1 &&
              <div className="row">
                <div className="col-lg-12">
                  <h3>{service.fullDetails.checklist.title}</h3>
                  <div className="innovation" >
                    <ul>
                      {service.fullDetails.checklist.items.map((item, key) => (
                      <li key={`checklist-item-${key}`}>
                        <i className="fa-solid fa-check" />
                        <p>{item}</p>
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              }
            </>
          }

          {typeof service.fullDetails.accordion != "undefined" &&
            <>
              {service.fullDetails.accordion.enabled == 1 &&
              <div className="row">
                  <div className="col-lg-12">
                      <h3>{service.fullDetails.accordion.title}</h3>
                      <div className="acc2">
                        <Accordion defaultActiveKey="service-acc-0" alwaysOpen>
                          {service.fullDetails.accordion.items.map((item, key) => (
                          <Accordion.Item key={`service-item-${key}`} eventKey={`service-acc-${key}`}>
                            <Accordion.Header>
                                {item.heading}
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>{item.content}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                          ))}
                        </Accordion>                        
                      </div>
                  </div>
              </div>
              }
            </>
          }

        </div>
      </section>
      {/* Service-Detail-First End */}
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
    const paths = await getPaths()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
  const [_name, id] = params.id.split('-');
    const postData = await getServiceData(id);

    return {
      props: {
        postData
      }
    }
}