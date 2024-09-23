import Header from "./Header";
import '@fortawesome/fontawesome-free/css/all.css';
import OfferBar from "./OfferBar";
import LandingPage from "./LandingPage";
import { pageData , sections} from "./Data";
import Footer from "./Footer";
import VerticalCarousel from "./VerticalCarousel";


export default function App(){
  return(
    <>
    <Header/>
    <OfferBar/>
    <LandingPage 
    heroImgSrc={pageData[0].heroImgSrc}
    heading={pageData[0].heading}
    headImgSrc={pageData[0].headImgSrc}
    p1={pageData[0].p1}
    p2={pageData[0].p2}
    divclass={pageData[0].divclass}
    animateClass={pageData[0].animateClass}
    />
    <LandingPage 
    heroImgSrc={pageData[1].heroImgSrc}
    divclass={pageData[1].divclass}
    p1={pageData[1].p1}
    p2={pageData[1].p2}
    animateClass={pageData[1].animateClass}
    />
     <LandingPage 
    heroImgSrc={pageData[2].heroImgSrc}
    divclass={pageData[2].divclass}
    heading={pageData[2].heading}
    subHeading={pageData[2].subHeading}
    p1={pageData[2].p1}
    p2={pageData[2].p2}
    animateClass={pageData[2].animateClass}
    />
    <div className="land-small-cont">
    <LandingPage 
    heroImgSrc={pageData[3].heroImgSrc}
    divclass={pageData[3].divclass}
    heading={pageData[3].heading}
    subHeading={pageData[3].subHeading}
    p1={pageData[3].p1}
    p2={pageData[3].p2}
    animateClass={pageData[3].animateClass}
    />

<LandingPage 
    heroImgSrc={pageData[4].heroImgSrc}
    divclass={pageData[4].divclass}
    heading={pageData[4].heading}
    subHeading={pageData[4].subHeading}
    p1={pageData[4].p1}
    p2={pageData[4].p2}
    animateClass={pageData[4].animateClass}
    />
    </div>
  <VerticalCarousel/>
    <Footer sections={sections}/>
   
    
    </>
  )
}