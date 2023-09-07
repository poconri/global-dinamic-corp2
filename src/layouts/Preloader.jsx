import { useLanguage } from "../stores/use-languaje";
import { useAppData } from "@/src/stores/use-app-data";

const Preloader = () => {
  const {isSpanish} = useLanguage();
  const {data} = useAppData();  

  return (
    <div className="preloader"> 
        <figure>
            {data ? <img src={(isSpanish ? data.en : data.es).settings.preloader.image} alt={(isSpanish ? data.es : data.en).settings.preloader.alt} />  : null}
        </figure>
    </div>
  );
};
export default Preloader;
