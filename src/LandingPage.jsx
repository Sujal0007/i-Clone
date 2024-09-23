import 'animate.css';

export default function LandingPage({ heroImgSrc, heading, headImgSrc, p1, p2 , divclass , animateClass , subHeading }) {
    
    return (
        <div className={divclass}>
            <img className="hero-img" src={heroImgSrc} alt="Hero Image" />
            <div className="land-head">
                {heading && 
                    <h1>{heading}</h1>
                }
                 {subHeading && 
                    <h2>{subHeading}</h2>
                }
                {headImgSrc && 
                <img className="int-img" src={headImgSrc} alt="Headline Image" />
                }
            
                
            </div>
            <div className='land-detail'>
            <button className="buy-btn">Buy</button>
            {p1 && 
            <h3 className="p1">{p1}</h3>
            }
            {p2 && 
            <p className="p2">{p2}</p>
             }
            </div>
        </div>
    );
}


