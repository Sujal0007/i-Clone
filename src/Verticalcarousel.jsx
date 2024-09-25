import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

  export default function VerticalCarousel(){
    return(
        <div className="vert-carousel">
        <Marquee
            fade={true}
            direction="left"
            reverse={false}
            pauseOnHover={true}
            className="" 
            innerClassName="" 
        >
  <div><img src="/marquee images/WhatsApp Image 2024-09-23 at 3.59.28 PM (1).jpeg" alt="" /></div>
  <div><img src="/marquee images/WhatsApp Image 2024-09-23 at 3.59.28 PM (2).jpeg" alt="" /></div>
  <div><img src="/marquee images/WhatsApp Image 2024-09-23 at 3.59.28 PM (3).jpeg" alt="" /></div>
  <div><img src="/marquee images/WhatsApp Image 2024-09-23 at 3.59.28 PM (4).jpeg" alt="" /></div>
  <div><img src="/marquee images/WhatsApp Image 2024-09-23 at 3.59.28 PM.jpeg" alt="" /></div>
  <div><img src="/marquee images/WhatsApp Image 2024-09-23 at 3.59.29 PM.jpeg" alt="" /></div>
  
  </Marquee>
  </div>
    )
}
