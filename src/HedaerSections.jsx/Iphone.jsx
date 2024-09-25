import ProductDetails from "./HeaderProduct";
export default function Iphone(){
  
    const phoneImages = [
        "https://www.apple.com/v/iphone/home/bw/images/overview/consider/apple_intelligence__gbh77cvflkia_large_2x.jpg",
        "https://www.apple.com/v/iphone/home/bw/images/overview/consider/camera__exi2qfijti0y_large_2x.jpg",
        "https://www.apple.com/v/iphone/home/bw/images/overview/consider/privacy__ckc0wa30o55y_large_2x.jpg"
    ];

    return (
        <ProductDetails
            videoSrc='https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/large_2x.mp4' 
            title="Get To Know Ipad." 
            images={phoneImages} 
        />
    );
}