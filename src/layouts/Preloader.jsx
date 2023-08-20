import appDataEs from "@data/appEs.json";
import appDataEn from "@data/appEn.json";
import { useLanguage } from "../stores/use-languaje";

const Preloader = () => {
  const {isSpanish} = useLanguage();

  return (
    <div className="preloader"> 
        <figure>
            <img src={(isSpanish ? appDataEs : appDataEn).settings.preloader.image} alt={(isSpanish ? appDataEs : appDataEn).settings.preloader.alt} /> 
        </figure>
    </div>
  );
};
export default Preloader;
