import ProductDetails from "./HeaderProduct";
export default function IWatch(){
  
    const watchImages = [
        "https://www.apple.com/v/watch/bo/images/overview/consider/feature_health__b8l8jg8aa0b6_large_2x.jpg",
        "https://www.apple.com/v/watch/bo/images/overview/consider/feature_fitness__bqrhzxk45liu_large_2x.jpg",
        "https://www.apple.com/v/watch/bo/images/overview/consider/feature_connectivity__k68bkgj3a6ie_large_2x.jpg"
    ];

    return (
        <ProductDetails
            videoSrc='https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large_2x.mp4' 
            title="Get To Know Ipad." 
            images={watchImages} 
        />
    );
}