import { useEffect } from 'react';
import { useLanguage } from '../../stores/use-languaje';
import {getData} from '../../stores/getData';
import {useAppData} from '../../stores/use-app-data';
import Link from "next/link";

const ServicesSection = () => {
    const {isSpanish} = useLanguage();
  const {sectionData, setSectionData} = useAppData((
    {sectionData,
        setSectionData}
  )=>({sectionData,
    setSectionData}));

  useEffect(() => {
      getData('services_section').then((res) => {
        console.log(res,'res')
        setSectionData(res)
      })
  }, [])

  return (
    <section className="gap service-style-one">
        <div className="container">
        <div className="row">
            {(isSpanish ? sectionData?.es : sectionData?.en)?.items.map((item, key) => (
            <div key={`services-item-${key}`} className="col-lg-4 col-md-6 col-sm-12 text-center" >
            <div className="service-data">
                <div className="svg-icon d-flex-all">
                    <img className="light-icon" src={item.icon.light} alt={item.icon.alt} />
                    <img className="dark-icon" src={item.icon.dark} alt={item.icon.alt} />
                </div>
                <h3><Link href={item.link}>{item.title}</Link></h3>
                <p>{item.text}</p>
                <Link href={item.link} className="icon">
                    <i className="fa-solid fa-angles-right" />
                </Link>
            </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default ServicesSection;